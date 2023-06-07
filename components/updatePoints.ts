import {router} from "next/client";
import {EventHandler, useState} from "react";

export const updatePoints = async (totalPoints: number, userId:string, isProgressUpdate:boolean) => {
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
                points: totalPoints,
                isProgressUpdate: isProgressUpdate
            })
        }
        const res = await fetch(endpoint, postData);
        const response = await res.json();

    } catch (e) {
        console.log(e);
    }
}
