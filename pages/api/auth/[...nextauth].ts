import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaClient} from "@prisma/client";
import {string} from "prop-types";

const authOptions: NextAuthOptions = {
    // set up 32 character long secret key in .env.local:
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            authorize: async (credentials, req) => {
                const { username, password } = credentials as {
                    username: string;
                    password: string;
                };

                const prisma = new PrismaClient();

                // @ts-ignore
                const user = await prisma.user.findUnique({where: {username: username}, select: {username: true, password: true} });
                console.log(user);

                // perform you login logic
                // find out user from db
                if (!user) {
                    throw new Error("User doesn't exists");
                }

                if (password == user.password) {
                    return {
                        username: username,
                    };
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
        jwt(params) {
            // update token
            if (params.user?.role) {
                params.token.role = params.user.role;
            }
            // return final_token
            return params.token;
        },
    },
};

export default NextAuth(authOptions);

