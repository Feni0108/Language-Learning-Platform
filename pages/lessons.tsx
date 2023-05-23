import React, {Component, useEffect, useState} from "react";
import Dictionary from "@/components/games/dictionary/dictionary";


export default function Lessons({allWords}) {
    const [solved, isSolved] = useState(true);
    const [gameCount, setGameCount] = useState(0);
    const [isGood, setIsGood] = useState(false);
    const [point, setPoint] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [row, setRow] = useState(0);
    const [isInRow, setIsInRow] = useState(true);
    const [randomId, setRandomId] = useState<number>(null);
    const [word, setWord] = useState();



    const getRandomGames = () => {
        //const randomId = (Math.floor(Math.random() * (games.length)))
       //setRandomId(randomId);
    }

    useEffect(() => {
        //getRandomGames()
            fetch('api/getGamesData/dictionary')
                .then((res) => res.json())
                .then((data) =>
                setWord(data.fourWords));
            console.log(word);

    });

    const handleSolved = () => {
        setGameCount(gameCount => gameCount+1);
        //setIsGood(true);
        if (isGood){
            setPoint(point => point+1);
            setIsInRow(true);
            setRow(row => row+1);
            setIsGood(false);
        } else {
            setIsInRow(false);
            setRow(0);
        }
        if (gameCount === 10) {
            setIsFinished(true);
        } else getRandomGames();
    }

    return (
        <div>
            {!isFinished &&
            <div>
                This is your process: {gameCount}/10
                {isInRow && row > 1 && <p>{row} in a row!</p>}
                {word && <Dictionary allWords={word} />}
                {isSolved && <div>
                    <button
                        onClick={() => handleSolved()}
                    >Continue</button>
                </div>}
            </div>}
            {isFinished &&
            <div>
                <div>
                    Congratulations! YOu finished the lesson!
                    Your points: {point}
                </div>
                <button>Continue</button>
            </div>}
        </div>
    )
}
/*
{games.content.body.map(block => Components(block))}

 */