import {getRandomSentence} from "@/components/getRandomSentence";
import {useEffect, useState} from "react";


export default function Sentence() {
    const [test, setTest] = useState([]);

    useEffect(() => {
        setTest(getRandomSentence())
    },[]);

    {console.log(test)}

    return (
        <div>
            "Hello World"

        </div>
    )
}