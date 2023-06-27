import { DefaultUser, TokenSet } from "next-auth";
import {Token} from "acorn";

interface IUser extends DefaultUser {
    /**
     * Role of user
     */
    username?: string | null;
    totalPoints?: number;

    actualProgress?: number;
    interfaceLanguage?: string | null;
    targetLanguage?: string | null;
    learningGoal?: string | null;
    token?: string;

    strike?: number;

}

declare module "next-auth" {
    interface User extends IUser {}
    interface Session {
        user?: User;

    }
}

declare module "next-auth/jwt" {
    interface JWT extends IUser {}
}