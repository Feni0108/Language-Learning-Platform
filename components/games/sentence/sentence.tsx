import React, { useState} from "react";
import styles from "@/styles/Senctence.module.css";
import Word from "@/pages/sentence/Word";
import Hover from "@/pages/sentence/Hover";



export default function Sentence({sentence, isSolved, setIsSolved, isGood, setIsGood}) {
    console.log(isSolved);
    const [task, setTask] = useState(sentence);
    //const [isSolved, setIsSolved] = useState(false);
    const [answer, setAnswer] = useState([]);
    //const [isGood, setIsGood] = useState(false);
    //Only work with this, but i dont understand, why?
    const [isSolvedInThis, setIsSolvedInThis] = useState(false);

    const handleCheck = () => {
        let finalAnswer:string = "";
        answer.map((word) => {
            finalAnswer = finalAnswer.concat(word.word+" ");
        });
        finalAnswer = finalAnswer.trimEnd();
        if (finalAnswer === task.solution){
            setIsGood(true);
            setIsSolved(true);
            setIsSolvedInThis(true);
        } else {
            setIsSolved(true);
            setIsSolvedInThis(true);
        }

    }
    const handleClick = (id, nextVisible:boolean) => {
        let newTask = {...task};
        newTask.words.map(word => {
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
                {task.original.map((value, number) => (
                    <Hover
                        word={value.word}
                        id={number}
                        hover={value.hover}
                    />
                ))}
            </div>
            <div className={styles.answer}>
                {answer.map((value, index) => (
                    <div className={styles.word}
                         id={index.toString()}
                        onClick={ isSolvedInThis? null :  () => handleClick(value.id, true)}>
                        {console.log(isSolved)}
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
                        isSolved={isSolvedInThis}
                    />
                    ))}
            </div>
            {isSolved && <div className={isGood? styles.goodAnswer : styles.wrongAnswer}>
                {isGood ? <h3>Correct Answer</h3> : <h3>Incorrect Answer</h3>}
                {isGood? null : <h4>Correct Answer:</h4>}
                {isGood? null : task.solution}
                <br/>
                <button>Next task</button>
            </div>}
            {!isSolved && <button onClick={() => handleCheck()}>Check</button>}
        </>
    )
}

