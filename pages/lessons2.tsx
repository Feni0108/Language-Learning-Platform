import React, {Component, useEffect, useState} from "react";
import Dictionary from "@/components/games/dictionary/dictionary";
import Picture from "@/components/games/picturegame/picture";
import useFetch from "@/components/games/useFetch";
import Sentence from "@/components/games/sentence/sentence";
import Pelmanism from "@/components/games/pelmanism/pelmanism";



export default function Lessons({allWords}) {
    const [solved, isSolved] = useState(true);
    const [gameCount, setGameCount] = useState(0);
    const [isGood, setIsGood] = useState(false);
    const [point, setPoint] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [row, setRow] = useState(0);
    const [isInRow, setIsInRow] = useState(true);
    const [id, setId] = useState<number>(null);
    const [word, setWord] = useState<any>();
    const [endpoint, setEndpoint] = useState("")
    const {loading , pics}  = useFetch(endpoint);
    const [game, setGame] = useState();
    const getRandomGames = () => {
        const randomId = (Math.floor(Math.random() * 4));
        if (randomId !== id) {
            setId(randomId);
        } else getRandomGames();
    }

    useEffect(() => {
        getRandomGames();
    },[gameCount])

    useEffect(() => {
        switch (id) {
            case 0: {
                setEndpoint('api/getGamesData/dictionary');
                break;
            }
            case 1: {
                setEndpoint('api/getGamesData/picture');
                break;
            }
            case 2: {
                setEndpoint('api/getGamesData/sentence');
                break;
            }
            case 3: {
                setEndpoint('api/getGamesData/pelmanism')
                break;
            }
        }
    }, [id])

    useEffect(() => {
        console.log(pics);
        if (pics.length !== 0){
            switch (id) {
                case 0: setWord(<Dictionary allWords={pics} /> ); break;
                case 1: setWord(<Picture allWords={pics} />) ; break;
                case 2: setWord(<Sentence sentence={pics} />); break;
                case 3: setWord(<Pelmanism allWords={pics} />); break;
            }
        }
    }, [pics])


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
        }
    }

    return (
        <div>
            {!isFinished &&
            <div>
                This is your process: {gameCount}/10
                {isInRow && row > 1 && <p>{row} in a row!</p>}
                <br/>
                This is the id: {id}
                {console.log(word)}
                {word}
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
