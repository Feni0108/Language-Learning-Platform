import {useEffect, useState} from "react";


const games = [
    <div>This is the test first</div>,
    <div>This is the second test</div>,
    <div>This is the third test</div>
]

export default function Lessons() {
    const [game, setGame] = useState<object>(null);

    const getRandomGames = () => {
        const randomId = (Math.floor(Math.random() * (games.length)))
        setGame(games[randomId]);
    }

    useEffect(() => {
        getRandomGames();
    });

    return (
        <div>
            {game}
        </div>
    )
}