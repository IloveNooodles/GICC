import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import crypto from "crypto";

import prisma from "../providers/prisma.js";
import { generateEmailVerification } from "../utils/email-verification.js";
import { createDirectory } from "../utils/create-dir.js";
import { userModelErrorCodes, userModelErrorMessage } from "../prisma/usererrors.js";

dotenv.config();
const saltRounds = 10;
const JWT_SECRET = process.env.jwt;

/* Register as team leader */
export const registerLeader = async (req, res) => {
  const { fullName, email, password, institution, faculty, teamName, referralCode, birthDate } =
    req.body;

  try {
    // check for existing users
    const user = await prisma.user.findUnique({ where: { email: email } });
    if (user) {
      return res.status(403).send({
        status: "ERROR",
        errorCodes: userModelErrorCodes.EMAIL_ALREADY_EXIST,
        errorMessage: userModelErrorMessage.EMAIL_ALREADY_EXIST,
      });
    }

    // check for team name
    const team = await prisma.team.findUnique({ where: { name: teamName } });
    if (team) return res.status(400).json({ message: "team name already taken" });

    // generating directory for team and member
    const pathTeam = await createDirectory("team", teamName);
    if (!pathTeam) return res.status(500).json({ message: "team directory creation error" });

    const pathUser = await createDirectory("user", fullName);
    if (!pathUser) return res.status(500).json({ message: "user directory creation error" });

    // create join code
    const teamCode = await crypto.randomBytes(5).toString("hex");
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const teamResult = await prisma.team.create({
      data: {
        name: teamName,
        code: teamCode,
        noOfMember: 1,
        submissionPath: pathTeam,
        member: {
          create: {
            fullName: fullName,
            email: email,
            password: hashedPassword,
            institution: institution,
            faculty: faculty,
            isTeamLeader: true,
            referralCode: referralCode || "",
            birthDate: birthDate,
            filePath: pathUser,
          },
        },
      },
    });

    if (!teamResult) return res.status(500).json({ message: "account creation error" });

    const emailResult = await generateEmailVerification(email);
    if (!emailResult) return res.status(500).json({ message: "email verification creation error" });

    res.status(200).json({ message: "success", data: teamResult });
  } catch (err) {
    res.status(500).send({
      status: "ERROR",
      errorCodes: userModelErrorCodes.CREATE_USER_FAILED,
      errorMessage: error.message,
    });
    console.log(`account creation error: ${error.message}`);
  }
};

export const registerMember = async (req, res) => {
  const { fullName, email, password, institution, faculty, teamCode, birthDate } = req.body;
  const memberLimit = 3;

  try {
    // check for existing users
    const user = await prisma.user.findUnique({ where: { email: email } });
    if (user) {
      return res.status(403).send({
        status: "ERROR",
        errorCodes: userModelErrorCodes.EMAIL_ALREADY_EXIST,
        errorMessage: userModelErrorMessage.EMAIL_ALREADY_EXIST,
      });
    }

    const teamResult = await prisma.team.findFirst({ where: { code: teamCode } });
    if (!teamResult) return res.status(400).json({ message: "no team found" });

    // check if the number of the member has reached the limit
    if (teamResult.noOfMember === memberLimit)
      return res.status(400).json({ message: "team already full" });

    // hashing password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // generating directory for member
    const pathUser = await createDirectory("user", fullName);
    if (!pathUser) return res.status(500).json({ message: "user directory creation error" });

    const result = await prisma.team.update({
      where: {
        id: teamResult.id,
      },
      data: {
        noOfMember: teamResult.noOfMember + 1,
        member: {
          create: {
            fullName: fullName,
            email: email,
            password: hashedPassword,
            institution: institution,
            faculty: faculty,
            isTeamLeader: false,
            birthDate: birthDate,
            filePath: pathUser,
          },
        },
      },
    });
    if (!result) return res.status(500).json({ message: "account creation error" });

    // generate email verification
    const emailResult = await generateEmailVerification(email);
    if (!emailResult) return res.status(500).json({ message: "email verification creation error" });

    res.json({ status: "SUCCESS" });
  } catch (error) {
    res.status(500).send({
      status: "ERROR",
      errorCodes: userModelErrorCodes.CREATE_USER_FAILED,
      errorMessage: error.message,
    });
    console.log(`account cration error: ${error.message}`);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await prisma.user.findUnique({
      where: { email: email },
      include: { team: true },
    });

    if (!result) {
      return res.status(403).send({
        status: "ERROR",
        errorCodes: userModelErrorCodes.USER_NOT_FOUND,
        errorMessage: userModelErrorMessage.USER_NOT_FOUND,
      });
    }

    // check for password match
    const hashedPassword = result.password;
    const isMatch = await bcrypt.compare(password, hashedPassword);

    if (!isMatch) {
      return res.status(403).send({
        status: "ERROR",
        errorCodes: userModelErrorCodes.WRONG_PASSWORD,
        errorMessage: userModelErrorMessage.WRONG_PASSWORD,
      });
    }

    // check for verified email
    if (!result.isEmailVerified) {
      return res.status(403).send({
        status: "ERROR",
        errorCodes: userModelErrorCodes.EMAIL_NOT_VERIFIED,
        errorMessage: userModelErrorMessage.EMAIL_NOT_VERIFIED,
      });
    }

    const token = await jwt.sign(
      {
        email: result.email,
        fullName: result.fullName,
        team: result.team.name,
      },
      JWT_SECRET,
      {
        expiresIn: "5m",
        issuer: "gicc2022",
      }
    );
    return res.send({
      status: "SUCCESS",
      token: token,
    });
  } catch (error) {
    console.log(`login error: ${error.message}`);
    res.status(500).send({
      status: "ERROR",
      errorCodes: userModelErrorCodes.LOGIN_FAILED,
      errorMessage: error.message,
    });
  }
};

export const verifyEmail = async (req, res) => {
  const query = req.query;
  const verificationCode = query.code;
  try {
    if (!verificationCode) {
      return res.status(403).send({
        status: "ERROR",
        errorCodes: userModelErrorCodes.INVALID_VERIFICATION_CODE,
        errorMessage: userModelErrorMessage.INVALID_VERIFICATION_CODE,
      });
    }

    // Check for unverified email in database
    const result = await prisma.emailVerification.findFirst({
      where: { verificationCode: verificationCode },
    });

    if (result) {
      // if found, change the email status to verified and delete the email from pending verifications
      const email = result.email;

      const updateUser = await prisma.user.update({
        where: {
          email: email,
        },
        data: {
          isEmailVerified: true,
        },
      });
      const deleteVerification = await prisma.emailVerification.delete({
        where: {
          email: email,
        },
      });
      if (!!updateUser & !!deleteVerification) {
        return res.status(200).json({ message: "SUCCESS" });
      }
      res.status(500).send({
        status: "ERROR",
        errorCodes: userModelErrorCodes.VERIFY_EMAIL_FAILED,
        errorMessage: error.message,
      });
    }
    return res.status(403).send({
      status: "ERROR",
      errorCodes: userModelErrorCodes.INVALID_VERIFICATION_CODE,
      errorMessage: userModelErrorMessage.INVALID_VERIFICATION_CODE,
    });
  } catch (error) {
    res.status(500).send({
      status: "ERROR",
      errorCodes: userModelErrorCodes.VERIFY_EMAIL_FAILED,
      errorMessage: error.message,
    });
    console.log(error);
  }
};

export const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  try {
    const { email } = jwt.decode(req.header("Bearer"));
    const result = await prisma.user.findUnique({ where: { email: email } });
    if (!result) return res.status(400).json({ message: "no email match" });

    const passwordMatch = await bcrypt.compare(oldPassword, result.password);
    if (!passwordMatch) return res.status(400).json({ message: "old password does not match" });

    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    const newResult = await prisma.user.update({
      where: { email: email },
      data: { password: hashedPassword },
    });

    res.status(200).json({ message: newResult });
  } catch (err) {
    console.log(`changePasswordError: ${err.message}`);
    res.status(500).json({ message: "server error" });
  }
};
