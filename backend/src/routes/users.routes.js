import { Router } from "express";

import {
  changePassword,
  login,
  registerLeader,
  registerMember,
  verifyEmail,
} from "../controllers/user.controller.js";
import { checkLogin } from "../middleware/auth.js";
import { RequestValidation } from '../middleware/request_validation.js';

import { JRegisterMemberRequestBody } from '../controllers/user.validation.js'
const router = Router();

router.get("/verify-email", verifyEmail);

router.post("/signin", login);
router.post("/change-password", checkLogin, changePassword);
router.post("/register-leader", registerLeader);

router.post(
  "/register-member", 
  RequestValidation({
    body: JRegisterMemberRequestBody
  }),
  registerMember
);

export default router;
