import {getRandomSentence} from "@/components/getRandomSentence";
import React, {useEffect, useState} from "react";
import {GetServerSideProps} from "next";
import prisma from "@/lib/prisma";
import styles from "@/styles/Senctence.module.css";


export const getServerSideProps: GetServerSideProps = async () => {
    const sentences = await prisma.sentence.findMany();
    const sentence = getRandomSentence(sentences);
    return {
        props: {sentence: sentence},
    }
}


export default function Sentence(sentence) {
    const task = sentence;
    const [isSolved, setIsSolved] = useState(false);
    const [answer, setAnswer] = useState([]);

    const handleSolved = () => {

    }



    return (
        <>
        <h3>Translate this sentence</h3>
            <div className="sentence">
                {task.sentence.original}
            </div>
            <div>
                Answer here...
            </div>
            <div>
                {task.sentence.words.map((value, index) => (
                    <div className={styles.word} id={index.toString()}>
                        {value.word}
                    </div>
                ))}
            </div>
            {isSolved && <button>Next task</button>}
            {!isSolved && <button onClick={() => handleSolved}>Check</button>}
        </>
    )
}


/*Incorrect
Correct Answer:
Answer
 */