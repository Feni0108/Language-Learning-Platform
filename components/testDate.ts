


export const testDate = (prevDate: Date) : boolean => {
    console.log("DateTestComponent")
    console.log(prevDate);
    if (prevDate.getMinutes() >= new Date().getMinutes()){
        return true;
    } else return false;
}