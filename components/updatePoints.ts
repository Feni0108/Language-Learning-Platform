
export const updatePoints = async (totalPoints: number, userId:string) => {
    const endpoint = "http://localhost:3000/api/updatePoints";



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
        return response;

    } catch (e) {
        console.log(e);
    }
}
