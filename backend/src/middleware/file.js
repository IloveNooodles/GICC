import multer from "multer";
import path from "path";
import slugify from "slugify";
import prisma from "../providers/prisma.js";

const submissionStorage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const token = req.header("Bearer");

    try {
      const { team } = jwt.decode(token);
      const result = await prisma.user.findMany({ where: { team: team } });

      cb(null, path.join(process.cwd(), result.submissionPath));
    } catch (error) {
      console.log(`file destination error: ${error.message}`);
    }
  },
  filename: async (req, file, cb) => {
    const token = req.header("Bearer");
    const { team } = jwt.decode(token);

    const fileName = slugify(team) + "_" + file.fieldname + path.extname(file.originalname);

    try {
      const result = await prisma.team.update({
        where: { name: team },
        data: {
          submissionName: fileName,
        },
      });
    } catch (error) {
      console.log(`file creation error: ${error.message}`);
    }

    cb(null, fileName);
  },
});

const userFileStorage = multer.diskStorage({
  destination: async (req, file, cb) => {
    try {
      cb(null, path.join(process.cwd(), "uploads"));
    } catch (error) {
      console.log(`file destination error: ${error.message}`);
    }
  },
  filename: async (req, file, cb) => {
    const fieldname = file.fieldname;
    let type = "unknown";
    switch (fieldname) {
      case "student_id":
        type = "student-id";
        break;
      case "twibbon":
        type = "twibbon";
        break;
      case "payment":
        type = "payment";
        break;
      default:
        type = "unknown";
    }

    const fileName = slugify(type + path.extname(file.originalname));
    try {
      cb(null, fileName);
    } catch (error) {
      console.log(`file creation error: ${error.message}`);
    }
  },
});

export const submissionMiddleware = multer({ storage: submissionStorage }).single("submission");

export const userFileMiddleware = multer({ storage: userFileStorage }).fields([
  { name: "twibbon", maxCount: 1 },
  { name: "payment", maxCount: 1 },
  { name: "student_id", maxCount: 1 },
]);
