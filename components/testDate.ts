import prisma from "@/lib/prisma";
//npm install moment --save
import moment from "moment";

export const testDate = (prevDate: Date, id: string): boolean => {
  if (prevDate == null) {
    return false;
  }
  const prevDay = moment(prevDate).startOf("day");
  const day = moment().startOf("day");

  if (day - prevDay == 0) {
    return true;
  } else {
    if (day - prevDay == 86400000) {
      return false;
    } else
      deleteStrike(id).then((res) => {
        return false;
      });
  }
};

export const deleteStrike = async (id: string) => {
  const updatePoints = await prisma.leaderboard.update({
    where: {
      userId: id,
    },
    data: {
      strike: 0,
    },
  });
};
