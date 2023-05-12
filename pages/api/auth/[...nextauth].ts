import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import GithubProvider from "next-auth/providers/github"
import {string} from "prop-types";

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
                    where: {username: username},
                    select: {
                        username: true,
                        password: true,
                        leaderBoard: true} });
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
                console.log("In the token");
                console.log(user)
                if (user.username){
                    token.username = user.username;
                } else {token.username = user.name}

                if (user.leaderBoard?.totalPoints !== undefined){
                    token.totalPoints =  user.leaderBoard.totalPoints;
                }
                token.id=user.id;
            }
            return token;
        },
        session: function ({session, token}) {
            /* Step 2: update the session.user based on the token object */
            if (token && session.user) {
                if (token.username) {
                    session.user.username = token.username
                }
                if (typeof token.totalPoints === "number") {
                    session.user.totalPoints = token.totalPoints
                }
                session.user.id = token.id;
            }

            return session;
        },
    },
};

export default NextAuth(authOptions);

