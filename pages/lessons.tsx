import React, {useEffect, useState} from "react";


const games = [
    <div>This is the test first</div>,
    <div>This is the second test</div>,
    <div>This is the third test</div>
]

export default function Lessons() {
    const [game, setGame] = useState<object>(null);
    const [solved, isSolved] = useState(true);
    const [gameCount, setGameCount] = useState(0);
    const [isGood, setIsGood] = useState(false);
    const [point, setPoint] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [row, setRow] = useState(0);
    const [isInRow, setIsInRow] = useState(true);

    const getRandomGames = () => {
        const randomId = (Math.floor(Math.random() * (games.length)))
        setGame(games[randomId]);
    }

    useEffect(() => {
        getRandomGames();
    });

    const handleSolved = () => {
        setGameCount(gameCount => gameCount+1);
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
                {game}
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