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

import { 
  JRegisterMemberRequestBody,
  JRegisterLeaderRequestBody,
  JVerifyEmailRequestQuery,
  JSignInRequestBody,
  JChangePasswordRequestHeader,
  JChangePasswordRequestBody,
} from '../controllers/user.validation.js'

const router = Router();

router.get(
  "/verify-email",
  RequestValidation({
    query: JVerifyEmailRequestQuery
  }), 
  verifyEmail
);

router.post(
  "/signin", 
  RequestValidation({
    body: JSignInRequestBody
  }),
  login
);

router.post(
  "/change-password", 
  RequestValidation({
    header: JChangePasswordRequestHeader,
    body: JChangePasswordRequestBody
  }),
  checkLogin, 
  changePassword
);

router.post(
  "/register-leader", 
  RequestValidation({
    body: JRegisterLeaderRequestBody
  }),
  registerLeader
);

router.post(
  "/register-member", 
  RequestValidation({
    body: JRegisterMemberRequestBody
  }),
  registerMember
);

export default router;
