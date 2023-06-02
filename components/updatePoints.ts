
export const updatePoints = async (totalPoints: number, userId:string) => {
    const endpoint = "http://localhost:3000/api/updatePoints";
    console.log("In apiy");
    console.log(userId);
    console.log(totalPoints);



    try {
        const postData = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                userId: userId,
                points: totalPoints
            })
        }
        const res = await fetch(endpoint, postData);
        const response = await res.json();
        /*if (typeof response === "object") {
            await router.push("http://localhost:3000/");
        }*/

    } catch (e) {
        console.log(e);
    }
}
