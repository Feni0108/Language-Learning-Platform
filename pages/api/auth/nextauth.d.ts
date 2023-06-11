import { DefaultUser } from "next-auth";

interface IUser extends DefaultUser {
    /**
     * Role of user
     */
    username?: string | null;
    totalPoints?: number;

    progress?: number;
    interfaceLanguage?: string | null;
    targetLanguage?: string | null;
    learningGoal?: string | null;

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