import { Router } from "express";

import { submissionMiddleware, userFileMiddleware } from "../middleware/file.js";
import { upload } from "../controllers/upload.controller.js";
import { checkLogin } from "../middleware/auth.js";

const router = Router();

router.post("/upload-submission", [checkLogin, submissionMiddleware], upload);
router.post("/upload-user-file", [checkLogin, userFileMiddleware], upload);

export default router;
