import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import crypto from "crypto";

import prisma from "../providers/prisma.js";

dotenv.config();
const saltRounds = 10;
const JWT_SECRET = process.env.jwt;

const generateEmailVerification = async (email) => {
  const token = crypto.randomBytes(32).toString("hex");
  try {
    const result = await prisma.emailVerif.create({
      data: { email: email, verificationCode: token },
    });
    // TODO: change to mail
    console.log(result);
    return result;
  } catch (error) {
    console.log(`verification error: ${error.message}`);
  }
};

export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email: email } });

  if (user) {
    // user already exists
    return res.status(403).send({ status: "error", error: "Email already exists" });
  }

  // Registering participant
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    // Add user to database
    const result = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
      },
    });

    // Generate Email Verification
    generateEmailVerification(result.email);
    res.json({ message: "success" });
  } catch (error) {
    res.status(500).send({ errorMessage: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await prisma.user.findUnique({ where: { email: email } });
    if (result) {
      const hashedPassword = result.password;

      // if password match, check for verified email
      const isMatch = await bcrypt.compare(password, hashedPassword);
      if (isMatch) {
        if (!result.isEmailVerified) {
          // Email is not verified
          return res.status(403).json({ message: "email not verified" });
        }

        const token = jwt.sign({ id: result._id, email: result.email }, JWT_SECRET, {
          expiresIn: "5m",
        });
        return res.send({ token: token });
      }

      return res.status(403).json({ message: "Password error" });
    }
    res.json({ message: "No user found" });
  } catch (error) {
    res.status(500).send({ errorMessage: error.message });
    console.log(error);
  }
};

export const verifyEmail = async (req, res) => {
  const { verificationCode } = req.body;

  try {
    if (!verificationCode) {
      return res.status(400).json({ message: "no code provided" });
    }

    // Check for unverified email in database
    const result = await prisma.emailVerif.findFirst({
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
      const deleteVerification = await prisma.emailVerif.delete({
        where: {
          email: email,
        },
      });
      if (!!updateUser & !!deleteVerification) {
        return res.status(200).json({ message: "success" });
      }
      return res.status(400).json({ message: "failed" });
    }
    res.status(400).json({ message: "not found" });
  } catch (error) {
    res.status(500).send({ errorMessage: error.message });
    console.log(error);
  }
};
