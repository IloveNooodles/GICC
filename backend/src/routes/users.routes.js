import { Router } from "express";

import { login, register, verifyEmail } from "../controllers/user.controller.js";

const router = Router();

router.post("/signin", login);
router.post("/signup", register);
router.post("/verify-email", verifyEmail);

export default router;