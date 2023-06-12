import React, { useEffect, useState } from "react";
import { FormatLessons } from "@/components/FormatLessons";
import { number, string } from "prop-types";
import Word from "@/components/games/picturegame/Word";

type Solution = {
    id: number;
    word: string;
};

type Picture = {
    id: number;
    image: string;
    isSelected: boolean;
    word: string;
};

type PictureProps = {
    allWords: [Solution, Picture[]];
    isSolved: boolean;
    setIsSolved: (isSolved: boolean) => void;
    isGood: boolean;
    setIsGood: (isGood: boolean) => void;
    handleSolved: () => void;
};


export default function Picture({
                                    allWords,
                                    isSolved,
                                    setIsSolved,
                                    isGood,
                                    setIsGood,
                                    handleSolved,
                                }: PictureProps) {
    const [task, setTask] = useState<[Solution, Picture[]]>(allWords);
    const [word, setWord] = useState<Solution | undefined>();
    const [pictures, setPictures] = useState<Picture[]>([]);
    const [answer, setAnswer] = useState<number | undefined>(undefined);

    useEffect(() => {
        console.log(task);
        setWord(task[0] as { id: number; word: string });
        setPictures(task[1]);
    }, [task]);

    const handleCheck = () => {
        if (word && answer === word.id) {
            setIsGood(true);
            setIsSolved(true);
        } else {
            setIsSolved(true);
        }
    };
    const handleClick = (id:number) => {
        const newPictures = pictures;
        newPictures.map((word) => {
            if (word.id === answer) {
                word.isSelected = false;
            }
            if (word.id === id) {
                word.isSelected = true;
            }
        });
        setPictures(newPictures);
        setAnswer(id);
    };

    return (
        <div>
            {word && <h2> Which one of these is "{word.word}"?</h2>}
            <div>
                {pictures &&
                    pictures.map((value) => (
                        <Word
                            key={value.id}
                            word={value.word}
                            id={value.id}
                            isSelected={value.isSelected}
                            handleClick={handleClick}
                            isSolved={isSolved}
                            image={value.image}
                            answer={answer ?? 0}
                            isGood={isGood}
                        />
                    ))}
            </div>
            {isSolved && (
                <div className={isGood ? FormatLessons.goodAnswer : FormatLessons.wrongAnswer}>
                    {isGood ? <h3>Correct Answer</h3> : <h3>Incorrect Answer</h3>}
                    {isGood ? null : <h4>Correct Answer:</h4>}
                    {isGood ? null : pictures.find((picture) => picture.id === word?.id)?.word}
                    <br />
                    {isSolved && (
                        <div>
                            <button onClick={() => handleSolved()}>Continue</button>
                        </div>
                    )}
                </div>
            )}
            {!isSolved && answer != null && (
                <button onClick={() => handleCheck()}>Check</button>
            )}
        </div>
    );

}
;