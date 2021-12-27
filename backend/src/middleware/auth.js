import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userModelErrorCodes, userModelErrorMessage } from "../prisma/usererrors.js";

dotenv.config();

const JWT_SECRET = process.env.jwt; 

export const checkLogin = async (req, res, next) => {
  try {
    const token = req.header("Bearer");

    if (!token) {
      return res.status(400).send({
        status: "ERROR",
        errorCodes: userModelErrorCodes.UNAUTHORIZED,
        errorMessage: userModelErrorMessage.UNAUTHORIZED,
      });
    }

    const valid = await jwt.verify(token, JWT_SECRET);
    
    if (!valid) {
      return res.status(403).send({
        status: "ERROR",
        errorCodes: userModelErrorCodes.INVALID_TOKEN,
        errorMessage: userModelErrorMessage.INVALID_TOKEN,
      });
    }

    next();
  } catch (err) {
    if (err.message === "jwt expired") {
      return res.status(403).send({
        status: "ERROR",
        errorCodes: userModelErrorCodes.SESSION_EXPIRED,
        errorMessage: userModelErrorMessage.SESSION_EXPIRED,
      });
    }
    console.log(`check login error: ${err.message}`);
    res.status(500).send({
      status: "ERROR",
      errorCodes: userModelErrorCodes.SERVER_ERROR,
      errorMessage: err.message,
    });
  }
};
