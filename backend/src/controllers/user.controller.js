import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import crypto from "crypto";

import prisma from "../providers/prisma.js";
import fs from "fs/promises";
import { generateEmailVerification } from "../utils/email-verification.js";
import { userModelErrorCodes, userModelErrorMessage } from "../prisma/usererrors.js";
import { driveService } from "../providers/google_api.js";
import { createDriveFile, createDriveFolder } from "../utils/create-drive.js";
import slugify from "slugify";

dotenv.config();
const saltRounds = 10;
const JWT_SECRET = process.env.jwt;
const parentId = process.env.PARENT_ID;

export const register = async (req, res) => {
  const { form } = req.body;
  const { twibbon, student_id, payment } = req.files;

  const parsedForm = JSON.parse(form);
  const {
    email,
    password,
    fullName,
    institution,
    faculty,
    competitionType,
    phoneNumber,
    referralCode,
  } = parsedForm;

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

    const emailResult = await generateEmailVerification(email);
    if (!emailResult) {
      return res.status(500).send({
        status: "ERROR",
        errorCodes: userModelErrorCodes.EMAIL_VERIFICATION_CREATION_ERROR,
        errorMessage: userModelErrorMessage.EMAIL_VERIFICATION_CREATION_ERROR,
      });
    }

    // CREATE GOOGLE DRIVE FOLDER AND USER FILES
    const unique = crypto.randomBytes(4).toString("hex");
    const folderName = slugify(fullName) + "_" + unique;
    const driveFolder = await createDriveFolder(driveService, parentId, folderName);
    if (!driveFolder)
      return res.status(500).send({
        status: "ERROR",
        errorCodes: "FOLDER_CREATION_ERROR",
      });
    const twibbonResult = await createDriveFile(driveService, driveFolder.data.id, twibbon[0]);
    const studentIdResult = await createDriveFile(driveService, driveFolder.data.id, student_id[0]);
    const paymentResult = await createDriveFile(driveService, driveFolder.data.id, payment[0]);
    if (!twibbonResult || !studentIdResult || !paymentResult) {
      return res.status(500).send({
        status: "ERROR",
        errorCodes: "FILE_CREATION_ERROR",
      });
    }

    // create user
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userResult = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        fullName: fullName,
        institution: institution,
        faculty: faculty,
        phoneNumber: phoneNumber,
        isEmailVerified: false,
        isFileVerified: false,
        referralCode: referralCode,
        competitionType: competitionType,
        filePath: driveFolder.data.id,
      },
    });

    if (!userResult) {
      return res.status(500).send({
        status: "ERROR",
        errorCodes: userModelErrorCodes.ACCOUNT_CREATION_ERROR,
        errorMessage: userModelErrorMessage.ACCOUNT_CREATION_ERROR,
      });
    }

    // FILE CLEANUP
    const twibbonDelete = await fs.unlink(twibbon[0].path);
    const paymentDelete = await fs.unlink(payment[0].path);
    const studentIdDelete = await fs.unlink(student_id[0].path);

    return res.status(200).json({
      message: "SUCCESS",
      data: userResult,
    });
  } catch (err) {
    res.status(500).send({
      status: "ERROR",
      errorCodes: userModelErrorCodes.CREATE_USER_FAILED,
      errorMessage: err.message,
    });
    console.log(`account creation error: ${err.message}`);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await prisma.user.findUnique({
      where: { email: email },
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
    if (!result) {
      return res.status(400).send({
        status: "ERROR",
        errorCodes: userModelErrorCodes.USER_NOT_FOUND,
        errorMessage: userModelErrorMessage.USER_NOT_FOUND,
      });
    }

    const passwordMatch = await bcrypt.compare(oldPassword, result.password);
    if (!passwordMatch) {
      return res.status(400).send({
        status: "ERROR",
        errorCodes: userModelErrorCodes.WRONG_PASSWORD,
        errorMessage: userModelErrorMessage.WRONG_PASSWORD,
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    const newResult = await prisma.user.update({
      where: { email: email },
      data: { password: hashedPassword },
    });

    res.status(200).json({ message: newResult });
  } catch (err) {
    console.log(`changePasswordError: ${err.message}`);
    res.status(500).send({
      status: "ERROR",
      errorCodes: userModelErrorCodes.SERVER_ERROR,
      errorMessage: err.message,
    });
  }
};
