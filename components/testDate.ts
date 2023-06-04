import prisma from "@/lib/prisma";

export const testDate = (prevDate: Date, id: string) : boolean => {
    if (prevDate == null){
        return false;
    }
    const prevDay = prevDate.getDate();
    const day = new Date().getDate();
    const prevYear = prevDate.getFullYear();
    const year = new Date().getFullYear();
    const prevMonth = prevDate.getMonth();
    const month = new Date().getMonth();

    if (prevYear == year){
        if (prevMonth == month){
            if (prevDay == (day-1)){
                return false;
            } else {
                if (prevDay == day){
                    return true;
                } else deleteStrike(id).then((res) => {return false});
            }
        } else {
            if (prevMonth == (month-1) && day == 1){
                switch (month){
                    case 2 :
                        if(year%4 == 0 && prevDay == 29){
                            return false;
                        }
                        if (year%4 != 0 && prevDay == 28){
                            return false;
                        } else {
                            deleteStrike(id).then((res) => {return false});
                        }
                        break;
                    case 1,3,5,7,8,10:
                        if (prevDay == 31){
                            return false;
                        } else deleteStrike(id).then((res) => {return false});
                        break;
                    case 4,6,9,11:
                        if (prevDay == 30){
                            return false;
                        } else deleteStrike(id).then((res) => {return false});
                        break;
                }
            }
        }

    } else {
        if(prevYear == (year-1) &&
        prevMonth == 11 &&
        month == 0 &&
        day == 1 &&
        prevDay == 31){
            return false;
        } else {
            deleteStrike(id).then((res) => {return false});
        }
    }


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