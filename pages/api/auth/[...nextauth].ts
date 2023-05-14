import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import prisma from "@/lib/prisma";

const authOptions: NextAuthOptions = {
    // set up 32 character long secret key in .env.local:
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
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
          select: { username: true, password: true },
        });
        console.log(user);

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
        async jwt({ token, user }) {
            /* Step 1: update the token based on the user object */
            if (user) {
                console.log(user.username)
                //console.log(user.leaderboard.totalPoints)
                console.log(user)
                if (user.username){
                    token.username = user.username;
                } else
                {token.username = user.name}
                if (user.leaderboard?.totalPoints){
                    token.totalPoints =  user.leaderboard.totalPoints;
                }
            }
            return token;
        },
        session({ session, token }) {
            /* Step 2: update the session.user based on the token object */
            if (token && session.user) {
                if (token.username) {
                    session.user.username = token.username
                }
                if (token.totalPoints) {
                    session.user.totalPoints = token.totalPoints
                }
            }
            return session;
        },
    },
  },
};

export default NextAuth(authOptions);
