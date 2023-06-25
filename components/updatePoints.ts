import { Language } from "@prisma/client";

export const updatePoints = async (totalPoints: number, userId: string, isProgressUpdate: boolean, interfaceLanguage: string, targetLanguage: string) => {
    const endpoint = "/api/updatePoints";



    try {
        const postData = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                userId: userId,
                points: totalPoints,
                isProgressUpdate: isProgressUpdate,
                interfaceLanguage: interfaceLanguage,
                targetLanguage: targetLanguage
            })
        }
        const res = await fetch(endpoint, postData);
        const response = await res.json();
        return response;

    } catch (e) {
        console.log(e);
    }
}
