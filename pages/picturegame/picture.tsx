import {GetServerSideProps} from "next";
import prisma from "@/lib/prisma";
import {getWordWithPictures} from "@/components/getRandomPictures";
import React, {useEffect, useState} from "react";
import styles from "@/styles/Senctence.module.css";

export const getServerSideProps: GetServerSideProps = async () => {
    const words = await prisma.dictionary.findMany();
    console.log(words);
    const fourWords = getWordWithPictures(words);
    return {
        props: {allWords: fourWords},
    }
}

export default function Picture({allWords}) {
    const [task, setTask] = useState(allWords);
    const [word, setWord] = useState({});
    const [pictures, setPictures] = useState([]);
    const [isSolved, setIsSolved] = useState(false);
    const [answer, setAnswer] = useState<number>(null);
    const [isGood, setIsGood] = useState(false);

    useEffect(() => {
        setWord(task[0]);
        setPictures(task[1]);
    },[task]);

    console.log(word);
    console.log(pictures);

    return (
        <div>
            <h2> Which one of these is "{word.word}"?</h2>
            <div>
                {pictures && pictures.map((value, index) => (
                    <div key={"picture"+index}>
                        <section>
                            <img src={`data:image/jpeg;base64,${value.image}`} />
                        </section>
                        <section>
                            {value.word}
                        </section>
                    </div>
                    ))}
            </div>
            {isSolved && <div className={isGood? styles.goodAnswer : styles.wrongAnswer}>
                {isGood ? <h3>Correct Answer</h3> : <h3>Incorrect Answer</h3>}
                {isGood? null : <h4>Correct Answer:</h4>}
                {isGood? null : task.sentence.solution}
                <br/>
                <button>Next task</button>
            </div>}
            {!isSolved && <button onClick={() => handleSolved()}>Check</button>}
        </div>
    )
}