import { Router } from "express";

import { changePassword, login, register, verifyEmail } from "../controllers/user.controller.js";
import { checkLogin } from "../middleware/auth.js";
import { userFileMiddleware } from "../middleware/file.js";

const router = Router();

router.get("/verify-email", verifyEmail);

// router.get("/profile")

router.post("/register", userFileMiddleware, register);

router.post("/signin", login);

router.post("/change-password", checkLogin, changePassword);

export default router;
