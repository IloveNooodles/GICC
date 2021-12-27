import { Router } from "express";

import { getTeamData } from "../controllers/team.controller.js";
import { checkLogin } from "../middleware/auth.js";
import { RequestValidation } from '../middleware/request_validation.js';
import { 
    JTeamDataRequestHeader,
  } from '../controllers/team.validation.js'

const router = Router();

router.get(
    "/data", 
    RequestValidation({
      header: JTeamDataRequestHeader,
    }),
    checkLogin, 
    getTeamData
); 

export default router;
