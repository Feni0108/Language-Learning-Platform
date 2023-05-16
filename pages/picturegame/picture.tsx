import {GetServerSideProps} from "next";
import prisma from "@/lib/prisma";
import {getWordWithPictures} from "@/components/getRandomPictures";
import React, {useEffect, useState} from "react";
import {FormatLessons} from "@/components/FormatLessons";
import Word from "@/pages/picturegame/Word";

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

    const handleSolved = () => {
        if (answer === word.id){
            setIsGood(true);
            setIsSolved(true);
        } else {
            setIsSolved(true);
        }

    }
    const handleClick = (id) => {
        const newPictures = pictures;
        newPictures.map(word => {
            if (word.id === answer) {
                word.isSelected = false;
            }
            if (word.id === id){
                word.isSelected = true;
            }
        })
        setPictures(newPictures);
        setAnswer(id);
        console.log(answer)
    }

    return (
        <div>
            <h2> Which one of these is "{word.word}"?</h2>
            <div>
                {pictures && pictures.map((value, index) => (
                    <Word
                        word={value.word}
                        id={value.id}
                        handleClick={handleClick}
                        isSolved={isSolved}
                        image={value.image}
                        answer={answer}
                    />
                    ))}
            </div>
            {isSolved && <div className={isGood? FormatLessons.goodAnswer : FormatLessons.wrongAnswer}>
                {isGood ? <h3>Correct Answer</h3> : <h3>Incorrect Answer</h3>}
                {isGood? null : <h4>Correct Answer:</h4>}
                {isGood? null : pictures[word.id].word}
                <br/>
                <button>Next task</button>
            </div>}
            {!isSolved && answer != null && <button onClick={() => handleSolved()}>Check</button>}
        </div>
    )
}

/*
 <div key={"picture"+index}>
                        <section>
                            <img src={`data:image/jpeg;base64,${value.image}`} />
                        </section>
                        <section>
                            {value.word}
                        </section>
                    </div>
 */