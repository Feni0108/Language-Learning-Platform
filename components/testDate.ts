import prisma from "@/lib/prisma";
import moment from "moment";

export const testDate = (prevDate: Date | null, id: string) : boolean => {
    if (prevDate == null){
        return false;
    }
    const prevDay = moment(prevDate).startOf('day');
    const day = moment().startOf('day');

    if (day - prevDay == 0){
        return true;
    } else {
        if (day-prevDay == 86400000){
            return false;
        } else deleteStrike(id).then(() => {return false})
    }
}

export const deleteStrike = async (id: string) => {
    await prisma.leaderboard.update(
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