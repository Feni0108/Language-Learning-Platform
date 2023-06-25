import {getSession} from 'next-auth/react';
import prisma from '../../../lib/prisma';
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return handleGetSettings(req, res);
  }
  if (req.method === 'POST') {
    return handleSaveSettings(req, res);
  }
  res.status(405).end();
}

async function handleSaveSettings(req: NextApiRequest, res: NextApiResponse) {
  const {interfaceLanguage, targetLanguage, learningGoal, userId} = req.body;
  try {
    const userSettings = await prisma.userSettings.upsert({
      where: {userId},
      update: {interfaceLanguage, targetLanguage, learningGoal},
      create: {userId, interfaceLanguage, targetLanguage, learningGoal, updatedAt: new Date(),},
    });
    const userProgress = await prisma.userProgress.upsert({
      where: {
        userId_interfaceLanguage_targetLanguage: {userId,interfaceLanguage,targetLanguage}

      },
      update: {},
      create: {
        interfaceLanguage: interfaceLanguage,
        targetLanguage: targetLanguage,
        user: {
          connect: {
            id: userId
          }
        }
      }
    });
    res.status(200).json({userSettings});
  } catch (error) {
    res.status(500).json({error: 'Failed to save settings'});
  }
}

async function handleGetSettings(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({req});
  if (!session || !session.user) {
    return res.status(401).json({error: 'Unauthorized'});
  }

  const userId = session.user.id;
  try {
    const userSettings = await prisma.userSettings.findUnique({
      where: {userId},
    });
    if (!userSettings) {
      return res.status(200).json({userSettings: null});
    }
    res.status(200).json({userSettings});
  } catch (error) {
    res.status(500).json({error: 'Failed to get settings'});
  }
}