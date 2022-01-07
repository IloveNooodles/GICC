import crypto from "crypto";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

import prisma from "../providers/prisma.js";

dotenv.config();

export const generateEmailVerification = async (email) => {
  const token = crypto.randomBytes(16).toString("hex");

  // nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS,
    },
  });

  // TODO: update the sender and the body of the message
  const options = {
    from: "GICC 2022 <no-reply@gicc2022.com>",
    to: email,
    subject: "GICC 2022 Email Verification",
    text: `Hello, thank you for registering for GICC 2022.
Please use this link to verify your account: http://127.0.0.1:4000/user/verify-email?code=${token}`,
  };

  try {
    const result = await prisma.emailVerification.create({
      data: { email: email, verificationCode: token },
    });

    if (!result){
      return res.status(500).send({
        status: "ERROR",
        errorCodes: userModelErrorCodes.EMAIL_VERIFICATION_CREATION_ERROR,
        errorMessage: userModelErrorMessage.EMAIL_VERIFICATION_CREATION_ERROR,
      });
    }
  
    const sentMail = await transporter.sendMail(options);

    return sentMail;
  } catch (error) {
    console.log(`verification generation error: ${error.message}`);
    return null;
  }
};
