import { Router } from "express";

import { getTeamData } from "../controllers/team.controller.js";
import { checkLogin } from "../middleware/auth.js";

const router = Router();

router.get("/data", checkLogin, getTeamData);

export default router;
