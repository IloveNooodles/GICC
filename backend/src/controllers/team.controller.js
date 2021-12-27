import jwt from "jsonwebtoken";

import prisma from "../providers/prisma.js"; 
import { teamModelErrorCodes, teamModelErrorMessage } from "../prisma/teamerrors.js";
export const getTeamData = async (req, res) => {
  const token = req.header("Bearer");

  try {
    if (!token){
      return res.status(403).send({
        status: "ERROR",
        errorCodes: teamModelErrorCodes.UNAUTHORIZED,
        errorMessage: teamModelErrorMessage.UNAUTHORIZED,
      });
    }

    const data = jwt.decode(token);
    const teamName = data.team;
    console.log(data);

    if (!teamName){
      return res.status(400).send({
        status: "ERROR",
        errorCodes: teamModelErrorCodes.INVALID_TEAM_NAME,
        errorMessage: teamModelErrorMessage.INVALID_TEAM_NAME,
      });
    }

    const result = await prisma.team.findUnique({
      where: { name: teamName },
      include: { member: true },
    });

    if (!result){
      return res.status(400).send({
        status: "ERROR",
        errorCodes: teamModelErrorCodes.INVALID_TEAM_NAME,
        errorMessage: teamModelErrorMessage.INVALID_TEAM_NAME,
      });
    }

    return res.status(200).json({ 
      message: "SUCCESS", 
      data: result 
    });

  } catch (err) {
    console.log(err.message);
    return res.status(500).send({
      status: "ERROR",
      errorCodes: teamModelErrorMessage.CREATE_USER_FAILED,
      errorMessage: error.message,
    });
  }
};
