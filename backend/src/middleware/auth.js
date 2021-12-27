import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.jwt;

export const checkLogin = async (req, res, next) => {
  try {
    const token = req.header("Bearer");

    if (!token) return res.status(400).json({ message: "unauthorized" });
    const valid = await jwt.verify(token, JWT_SECRET);
    if (!valid) {
      return res.status(403).json({ message: "invalid token" });
    }

    next();
  } catch (err) {
    if (err.message === "jwt expired") {
      return res.status(403).json({ message: "session expired" });
    }
    console.log(`check login error: ${err.message}`);
    res.status(500).json({ message: "server error" });
  }
};
