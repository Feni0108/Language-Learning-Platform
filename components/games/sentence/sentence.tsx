import React, { useState } from "react";
import styles from "@/styles/Senctence.module.css";
import Word from "@/components/games/sentence/Word";
import Hover from "@/components/games/sentence/Hover";

export type Original = {
    word: string;
    hover: string[];
};
export type Words = {
    id: number;
    word: string;
    isVisible: boolean;
};

export type SentenceTask = {
    original: Original[];
    solution: string;
    words: Words[];
};

type SentenceProps = {
    sentence: SentenceTask;
    isSolved: boolean;
    setIsSolved: (isSolved: boolean) => void;
    isGood: boolean;
    setIsGood: (isGood: boolean) => void;
    handleSolved: () => void;
};


export default function Sentence({
                                     sentence,
                                     isSolved,
                                     setIsSolved,
                                     isGood,
                                     setIsGood,
                                     handleSolved,
                                 }: SentenceProps) {
    const [task, setTask] = useState<SentenceTask>(sentence);
    const [answer, setAnswer] = useState<Words[]>([]);

    const handleCheck = () => {
        let finalAnswer: string = "";
        answer.map((word) => {
            finalAnswer = finalAnswer.concat(word.word + " ");
        });
        finalAnswer = finalAnswer.trimEnd();
        if (finalAnswer === task.solution) {
            setIsGood(true);
            setIsSolved(true);
        } else {
            setIsSolved(true);
        }
    };

    const handleClick = (id:number, nextVisible: boolean) => {
        let newTask = { ...task };
        newTask.words.map((word) => {
            if (word.id === id && !nextVisible) {
                word.isVisible = nextVisible;
                const nextAnswer = answer;
                nextAnswer.push(word);
                setAnswer(nextAnswer);
            }
            if (word.id === id && nextVisible) {
                word.isVisible = nextVisible;
                if (answer.length === 1) {
                    setAnswer([]);
                } else {
                    const remItem = answer.indexOf(word);
                    let nextAnswer = answer;
                    nextAnswer.splice(remItem, 1);
                    setAnswer(nextAnswer);
                }
            }
        });

        setTask(newTask);
    };

    return (
        <>
            <h3>Translate this sentence</h3>
            <div className="sentence">
                {task.original.map((value, number) => (
                    <Hover word={value.word} id={number} hover={value.hover} />
                ))}
            </div>
            <div className={styles.answer}>
                {answer.map((value, index) => (
                    <div
                        className={styles.word}
                        id={index.toString()}
                        onClick={isSolved ? undefined : () => handleClick(value.id, true)}
                    >
                        {value.word}
                    </div>
                ))}
            </div>
            <div>
                {task.words.map((value) => (
                    <Word
                        word={value.word}
                        id={value.id}
                        isVisible={value.isVisible}
                        handleClick={handleClick}
                        isSolved={isSolved}
                    />
                ))}
            </div>
            {isSolved && (
                <div className={isGood ? styles.goodAnswer : styles.wrongAnswer}>
                    {isGood ? <h3>Correct Answer</h3> : <h3>Incorrect Answer</h3>}
                    {isGood ? null : <h4>Correct Answer:</h4>}
                    {isGood ? null : task.solution}
                    <br />
                    {isSolved && (
                        <div>
                            <button onClick={() => handleSolved()}>Continue</button>
                        </div>
                    )}
                </div>
            )}
            {!isSolved && <button onClick={() => handleCheck()}>Check</button>}
        </>
    );
}
;