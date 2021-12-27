import { Router } from "express";

import {
  changePassword,
  login,
  registerLeader,
  registerMember,
  verifyEmail,
} from "../controllers/user.controller.js";
import { checkLogin } from "../middleware/auth.js";

const router = Router();

router.get("/verify-email", verifyEmail);

router.post("/signin", login);
router.post("/change-password", checkLogin, changePassword);
router.post("/register-leader", registerLeader);
router.post("/register-member", registerMember);

export default router;
