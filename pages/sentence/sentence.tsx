import {getRandomSentence} from "@/components/getRandomSentence";
import React, {useEffect, useState} from "react";
import {GetServerSideProps} from "next";
import prisma from "@/lib/prisma";
import styles from "@/styles/Senctence.module.css";
import Word from "@/pages/sentence/Word";


export const getServerSideProps: GetServerSideProps = async () => {
    const sentences = await prisma.sentence.findMany();
    const sentence = getRandomSentence(sentences);
    return {
        props: {sentence: sentence},
    }
}


export default function Sentence(sentence) {
    const [task, setTask] = useState(sentence);
    const [isSolved, setIsSolved] = useState(false);
    const [answer, setAnswer] = useState([]);

    const handleSolved = () => {

    }
    const handleClick = (id, nextVisible:boolean) => {
        const newTask = task;
        newTask.sentence.words.map(word => {
            if (word.id === id && !nextVisible) {
                word.isVisible = nextVisible;
                const nextAnswer = answer;
                nextAnswer.push(word);
                setAnswer(nextAnswer);
            }
        });
        setTask(newTask);
        console.log(task);
        console.log(answer);
        fetchData();
    }
    let fetchData =(() => {
        console.log("Invdoke fetch")
        console.log(answer);
    })


    useEffect(() => {
        fetchData();
    },[fetchData]);

    return (
        <>
        <h3>Translate this sentence</h3>
            <div className="sentence">
                {task.sentence.original}
            </div>
            <div className={styles.answer}>
                {answer.map((value, index) => (
                    <div className={value.isVisible ? styles.word : styles.invisible}
                         id={index.toString()}
                         onClick={() => handleClick(value.id, true)}>
                        {value.word}
                    </div>
                ))}
            </div>
            <div>
                {task.sentence.words.map((value, index) => (
                        <Word
                        word={value.word}
                          id={value.id}
                        isVisible={value.isVisible}
                          fetchData={fetchData}
                          handleClick={handleClick}
                          answer={answer}
                          setAnswer={setAnswer}
                          setTask={setTask}
                          task={task}
                        />
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


 <div className={value.isVisible ? styles.word : styles.invisible}
                         id={index.toString()}
                        onClick={() => handleClick(value.id, false)}>
                        {value.word}
                    </div>
 */