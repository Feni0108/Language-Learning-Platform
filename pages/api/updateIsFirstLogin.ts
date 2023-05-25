import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    try {
      const { userId } = req.body;

      // Update the isFirstLogin field for the user with the provided userId
      await prisma.user.update({
        where: { id: userId },
        data: { isFirstLogin: false },
      });

      res.status(200).json({ message: "isFirstLogin updated successfully" });
    } catch (error) {
      console.error("Error updating isFirstLogin:", error);
      res.status(500).json({ error: "Failed to update isFirstLogin" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
