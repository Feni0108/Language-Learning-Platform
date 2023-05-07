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
    const [isGood, setIsGood] = useState(false);


    const handleSolved = () => {
        let finalAnswer:string = "";
        answer.map((word) => {
            finalAnswer = finalAnswer.concat(word.word+" ");
        });
        finalAnswer = finalAnswer.trimEnd();
        if (finalAnswer === task.sentence.solution){
            setIsGood(true);
            setIsSolved(true);
        } else {
            setIsSolved(true);
        }

    }
    const handleClick = (id, nextVisible:boolean) => {
        let newTask = {...task};
        newTask.sentence.words.map(word => {
            if (word.id === id && !nextVisible) {
                word.isVisible = nextVisible;
                const nextAnswer = answer;
                nextAnswer.push(word);
                setAnswer(nextAnswer);
            }
            if (word.id === id && nextVisible) {
                word.isVisible = nextVisible;
                if (answer.length === 1){
                    setAnswer([]);
                } else {
                    const remItem = answer.indexOf(word);
                    let nextAnswer = answer;
                    nextAnswer.splice(remItem,1);
                    setAnswer(nextAnswer);
                }
            }
        });

        setTask(newTask);
    }


    return (
        <>
        <h3>Translate this sentence</h3>
            <div className="sentence">
                {task.sentence.original}
            </div>
            <div className={styles.answer}>
                {answer.map((value, index) => (
                    <div className={styles.word}
                         id={index.toString()}
                        onClick={ isSolved? null :  () => handleClick(value.id, true)}>
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
                        handleClick={handleClick}
                        answer={answer}
                        setAnswer={setAnswer}
                        setTask={setTask}
                        task={task}
                        isSolved={isSolved}
                    />
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
        </>
    )
}


/*Incorrect
Correct Answer:
Answer




<div className={value.isVisible ? styles.word : styles.invisible}
                         id={index.toString()}
                         onClick={value.isVisible ? () => handleClick(value.id, false) : null }>
                        {value.word}
                    </div>
 */