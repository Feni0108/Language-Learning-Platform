import React, {useEffect, useState} from "react";
import styles from "@/styles/Senctence.module.css";


const games = [
    <div>This is the test first</div>,
    <div>This is the second test</div>,
    <div>This is the third test</div>
]

export default function Lessons() {
    const [game, setGame] = useState<object>(null);
    const [solved, isSolved] = useState(true);
    const [gameCount, setGameCount] = useState(0);

    const getRandomGames = () => {
        const randomId = (Math.floor(Math.random() * (games.length)))
        setGame(games[randomId]);
    }

    useEffect(() => {
        getRandomGames();
    });

    const handleSolved = () => {
        setGameCount(gameCount => gameCount+1);
        getRandomGames();
    }

    return (
        <div>
            {game}
            <div>
                This is your process: {gameCount}/10
            </div>
            {isSolved && <div>
                <button
                    onClick={() => handleSolved()}
                >Next task</button>
            </div>}
        </div>
    )
}