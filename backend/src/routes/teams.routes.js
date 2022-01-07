import { Router } from "express";

import { checkLogin } from "../middleware/auth";
import { submissionMiddleware } from "../middleware/file";

const router = Router();

router.get("/submission", checkLogin, async (req, res) => {

})

router.post("/submit", [checkLogin, submissionMiddleware], async (req, res) => {

})