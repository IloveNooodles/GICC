import multer from "multer";
import path from "path";
import jwt from "jsonwebtoken";
import slugify from "slugify";

import prisma from "../providers/prisma.js";

const submissionStorage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const token = req.header("Bearer");

    try {
      const { team } = jwt.decode(token);
      console.log(jwt.decode(token));
      const result = await prisma.team.findUnique({ where: { name: team } });

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
    const token = req.header("Bearer");

    try {
      const { email } = jwt.decode(token);
      const result = await prisma.user.findUnique({ where: { email: email } });

      cb(null, path.join(process.cwd(), result.filePath));
    } catch (error) {
      console.log(`file destination error: ${error.message}`);
    }
  },
  filename: async (req, file, cb) => {
    const token = req.header("Bearer");
    const { email, fullName } = jwt.decode(token);

    const fieldName = req.files[0].fieldname;
    let type;
    if (fieldName === "STUDENT_ID") {
      type = "STUDENT_ID";
    } else if (fieldName === "TWIBBON") {
      type = "TWIBBON";
    } else if (fieldName === "RECEIPT") {
      type = "RECEIPT";
    } else {
      type = "UNKNOWN";
    }

    const fileName =
      slugify(fullName, { lower: true }) + "_" + type + path.extname(file.originalname);
    try {
      console.log(`email: ${email} fullname: ${fullName} type: ${type}`);
      const result = await prisma.user.update({
        where: { email: email },
        data: {
          file: {
            create: {
              type: type,
              name: fileName,
            },
          },
        },
      });
      cb(null, fileName);
    } catch (error) {
      console.log(`file creation error: ${error.message}`);
    }
  },
});

export const submissionMiddleware = multer({ storage: submissionStorage }).single("submission");

export const userFileMiddleware = multer({ storage: userFileStorage }).any();
