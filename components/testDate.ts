import prisma from "@/lib/prisma";
import {getServerSession} from "next-auth";


export const testDate = (prevDate: Date, id: string) : boolean => {
    console.log("DateTestComponent")
    console.log(prevDate);
    if  (prevDate.getMinutes() > new Date().getMinutes()-10){
        deleteStrike(id).then((res) => {return false});
    }
    if (prevDate.getMinutes() >= new Date().getMinutes()){
        return true;
    } else return false;
}

export const deleteStrike = async (id: string) => {
    const updatePoints = await prisma.leaderboard.update(
        {
            where: {
                userId: id,
            },
            data: {
                strike: 0
            }
        }
    );
}