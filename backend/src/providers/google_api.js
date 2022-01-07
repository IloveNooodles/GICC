import { google } from "googleapis";

const KEYFILEPATH = "./src/credentials/keys.json";
const SCOPES = ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/spreadsheets"];
const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

export const driveService = google.drive({ version: "v3", auth: auth });
export const sheetsService = google.sheets({ version: "v4", auth: auth });
