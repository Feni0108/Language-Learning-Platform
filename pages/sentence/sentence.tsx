import {getRandomSentence} from "@/components/getRandomSentence";
import {useEffect, useState} from "react";
import {GetServerSideProps} from "next";
import prisma from "@/lib/prisma";

export const getServerSideProps: GetServerSideProps = async () => {
    const sentences = await prisma.sentence.findMany();
    const sentence = getRandomSentence(sentences);
    return {
        props: {sentence: sentence},
    }
}


export default function Sentence(sentence) {
    const [test, setTest] = useState(sentence);


    {console.log(test)}

    return (
        <div>
            "Hello World"

        </div>
    )
}