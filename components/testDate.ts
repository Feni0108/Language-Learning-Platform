import prisma from "@/lib/prisma";
import moment from "moment";

export const testDate = (prevDate: Date | null, id: string) : boolean => {
    if (prevDate == null){
        return false;
    }
    const prevDay: any = moment(prevDate).startOf('day');
    const day: any = moment().startOf('day');

    console.log(prevDay);

    if (day - prevDay == 0){
        return true;
    } else {
        if (day-prevDay == 86400000){
            return false;
        } else deleteStrike(id).then(() => {return false})
    }
    return false;
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