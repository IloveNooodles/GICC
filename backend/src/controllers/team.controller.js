import jwt from "jsonwebtoken";

import prisma from "../providers/prisma.js";

export const getTeamData = async (req, res) => {
  const token = req.header("Bearer");

  try {
    if (!token) return res.send(403).json({ message: "not jwt provided" });

    const data = jwt.decode(token);
    const teamName = data.team;
    console.log(data);

    if (!teamName) return res.status(400).json({ message: "no team name provided" });

    const result = await prisma.team.findUnique({
      where: { name: teamName },
      include: { member: true },
    });

    if (!result) return res.status(404).json({ message: "no matching team name found" });

    return res.status(200).json({ message: "success", data: result });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: "team data fetch error" });
  }
};
