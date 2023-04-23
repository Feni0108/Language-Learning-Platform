import {DummyDatabase} from "@/DummyDatabase";
import {number} from "prop-types";



const MAX_ID = 4
let notThisOne: number[] = new Array();

export const getRandomWord = () => {
    const randomId = (Math.floor(Math.random() * (MAX_ID))+1)
    let newId = true;
    for(let i:number = 0; i<notThisOne.length; i++) {
        if (notThisOne[i] === randomId){
            newId = false;
        }
    }
    console.log(randomId)
    console.log("Array length: "+notThisOne.length)
    if (newId){
        notThisOne.push(randomId);
    }

}

export const getOptions = () => {
    do {
        getRandomWord();
    } while (notThisOne.length!==4)
    console.log(notThisOne)
    return [DummyDatabase[notThisOne[0]],
            DummyDatabase[notThisOne[1]],
            DummyDatabase[notThisOne[2]],
            DummyDatabase[notThisOne[3]],
    ];

}