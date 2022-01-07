import { Router } from "express";
import dotenv from "dotenv";

import { sheetsService } from "../providers/google_api.js";
import prisma from "../providers/prisma.js";

dotenv.config();
const spreadsheetId = process.env.SPREADSHEET_ID;

const router = Router();

const spreadsheetify = (row) => {
  const filtered = (({
    id,
    fullName,
    email,
    institution,
    faculty,
    lineID,
    phoneNumber,
    referralCode,
    team,
    filePath,
  }) => ({
    id, fullName, email, institution, faculty, lineID, phoneNumber, referralCode, team, filePath
  }))(row);
  const result = {...filtered, filePath: `https://drive.google.com/drive/u/0/folders/${filtered.filePath}`}
  return Object.values(result);
};

router.get("/pull", async (req, res) => {
  try {
    const result = await prisma.user.findMany({});
    if (!result) return res.status(500).send({ status: "ERROR" });

    const spreadsheetEntries = result.map((row => spreadsheetify(row)));
    const columns = String.fromCharCode(64 + spreadsheetEntries[0].length);
    const range = `Data!A2:${columns}${spreadsheetEntries.length + 1}`;
    
    sheetsService.spreadsheets.values.update({
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: "USER_ENTERED",
      resource: {
        values: spreadsheetEntries,
      },
    });
    res.json(spreadsheetEntries);
  } catch (error) {
    res.send(`Error: ${error.message}`);
  }
});

router.get("/push", async (req, res) => {
  res.send("ok");
});

export default router;
