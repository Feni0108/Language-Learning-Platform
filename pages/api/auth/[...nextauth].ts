import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

import GithubProvider from "next-auth/providers/github";

const authOptions: NextAuthOptions = {
  // set up 32 character long secret key in .env.local:
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize: async (credentials, req) => {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        // @ts-ignore
        const user = await prisma.user.findUnique({
          where: { username: username },
          select: {
            id: true,
            username: true,
            password: true,
          },
        });

        // perform you login logic
        // find out user from db
        if (!user) {
          throw new Error("User doesn't exists");
        }

        if (password == user.password) {
          return user;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    /*jwt(params) {
            // update token
            if (params.user?.role) {
                params.token.role = params.user.role;
            }
            // return final_token
            return params.token;
        },*/

    async jwt({ token, trigger, user, session }) {
      /* Step 1: update the token based on the user object */
      //Update points
      if (trigger === "update" && session?.id) {
        const totalPoints = await prisma.leaderboard.findUnique({
          where: {
            userId: session.id,
          },
          select: {
            totalPoints: true,
            strike: true,
          },
        });
        token.totalPoints = totalPoints.totalPoints;
      }

      // Settings
      if (trigger === "update" && session?.id && session?.type === "settings") {
        const findSettings = await prisma.user.findUnique({
          where: {
            id: session.id,
          },
          select: {
            userSettings: true,
          },
        });
        console.log(findSettings);
        token.interfaceLanguage = findSettings.userSettings.interfaceLanguage;
        token.targetLanguage = findSettings.userSettings.targetLanguage;
        token.learningGoal = findSettings.userSettings.learningGoal;
      }

      if (user) {
        //Usernames
        if (user.username) {
          token.username = user.username;
        } else token.username = user.name;

        //Totalpoints
        const findLeaderBoard = await prisma.user.findUnique({
          where: {
            id: user.id,
          },
          select: {
            leaderBoard: true,
          },
        });
        if (findLeaderBoard.leaderBoard === null) {
          await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              leaderBoard: {
                create: {},
              },
            },
          });
        }
        const totalPoints = await prisma.leaderboard.findUnique({
          where: {
            userId: user.id,
          },
          select: {
            totalPoints: true,
            strike: true,
          },
        });
        token.totalPoints = totalPoints.totalPoints;
        token.id = user.id;

        //Settings
        const findSettings = await prisma.user.findUnique({
          where: {
            id: user.id,
          },
          select: {
            userSettings: true,
          },
        });

        if (findSettings.userSettings !== null) {
          token.interfaceLanguage = findSettings.userSettings.interfaceLanguage;
          token.targetLanguage = findSettings.userSettings.targetLanguage;
          token.learningGoal = findSettings.userSettings.learningGoal;
        }
      }

      return token;
    },
    async session({ session, token }) {
      /* Step 2: update the session.user based on the token object */

      if (token && session.user) {
        if (token.username) {
          session.user.username = token.username;
        }
        if (typeof token.totalPoints === "number") {
          session.user.totalPoints = token.totalPoints;
          session.user.strike = token.strike;
        }
        // Settings
        if (typeof token.interfaceLanguage !== "undefined") {
          session.user.interfaceLanguage = token.interfaceLanguage;
          session.user.targetLanguage = token.targetLanguage;
          session.user.learningGoal = token.learningGoal;
        }
        session.user.id = token.id;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
