export const lastGame = async (userId:string) => {
    const endpoint = "/api/lastGame";
    try {
        const postData = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                userId: userId,
            })
        }
        const res = await fetch(endpoint, postData);
        const response = await res.json();
        return response;

    } catch (e) {
        console.log(e);
    }

}
