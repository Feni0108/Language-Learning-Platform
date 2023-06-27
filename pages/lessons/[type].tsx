import React, { useEffect, useState } from "react";
import Dictionary from "@/components/games/dictionary/dictionary";
import Picture from "@/components/games/picturegame/picture";
import useFetch from "@/components/games/useFetch";
import Sentence, {
    Original,
    SentenceTask,
    Words,
} from "@/components/games/sentence/sentence";
import Pelmanism from "@/components/games/pelmanism/pelmanism";
import { updatePoints } from "@/components/updatePoints";
import { useSession } from "next-auth/react";
import AccessDenied from "@/components/ChildComponent/AccessDenied";
import SignUpButton from "@/components/ChildComponent/SignUpButton";
import { useRouter } from "next/router";
import Story, {
    SentenceStoryLine,
} from "@/components/games/storyline/storyline";

import LinearWithValueLabel from "@/components/ChildComponent/ProgressLine";
import { AiTwotoneFire } from "react-icons/ai";

export default function Lessons() {


    const router = useRouter();
    let {type, isProgressUpdate} = router.query;

    const [isProgressUpdateBoolean, setIsProgressUpdateBoolean] = useState<
        boolean | undefined
    >(undefined);
    const [isSolved, setIsSolved] = useState(false);
    const [gameCount, setGameCount] = useState(1);
    const [isGood, setIsGood] = useState(false);
    const [point, setPoint] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [row, setRow] = useState(0);
    const [isInRow, setIsInRow] = useState(true);
    const [id, setId] = useState<number | null>(null);
    const [game, setGame] = useState<any>();
    const [endpoint, setEndpoint] = useState("");
    const {task} = useFetch(endpoint);
    const {data: session, status, update} = useSession();

    useEffect(() => {
        if (isProgressUpdate === "false") {
            setIsProgressUpdateBoolean(false);
        } else setIsProgressUpdateBoolean(true);
    }, [isProgressUpdate]);

    const getRandomGames = () => {
        const randomId = Math.floor(Math.random() * 5);
        if (randomId !== id) {
            setId(randomId);
        } else getRandomGames();
    };

    useEffect(() => {
        const unloadCallback = (event: any) => {
            event.preventDefault();
            sessionStorage.setItem("type", type!.toString());
            event.returnValue = window.location.reload();
            return "You have unsaved changes!";
        };

        window.addEventListener("beforeunload", unloadCallback);
        return () => window.removeEventListener("beforeunload", unloadCallback);
    }, []);

    useEffect(() => {
        getRandomGames();
    }, [gameCount]);

    useEffect(() => {
        if (type === undefined){
            type = sessionStorage!.getItem("type")!.toString();
        }

        switch (id) {
            case 0: {
                setEndpoint("../api/getGamesData/" + type + "/dictionary");
                break;
            }
            case 1: {
                setEndpoint("../api/getGamesData/" + type + "/picture");
                break;
            }
            case 2: {
                setEndpoint("../api/getGamesData/" + type + "/sentence");
                break;
            }
            case 3: {
                setEndpoint("../api/getGamesData/" + type + "/pelmanism");
                break;
            }
            case 4: {
                setEndpoint("../api/getGamesData/" + type + "/storyline");
            }
        }
    }, [id]);

    useEffect(() => {
        if (task.length !== 0) {
            switch (id) {
                case 0:
                    setGame(
                        <Dictionary
                            task={[task[0], task[1]]}
                            isSolved={isSolved}
                            setIsSolved={setIsSolved}
                            isGood={isGood}
                            setIsGood={setIsGood}
                            handleSolved={handleSolved}
                        />
                    );
                    break;
                case 1:
                    setGame(
                        <Picture
                            allWords={[task[0], task[1]]}
                            isSolved={isSolved}
                            setIsSolved={setIsSolved}
                            isGood={isGood}
                            setIsGood={setIsGood}
                            handleSolved={handleSolved}
                        />
                    );
                    break;
                case 2:
                    setGame(
                        <Sentence
                            sentence={task as unknown as SentenceTask}
                            isSolved={isSolved}
                            setIsSolved={setIsSolved}
                            isGood={isGood}
                            setIsGood={setIsGood}
                            handleSolved={handleSolved}
                        />
                    );
                    break;
                case 3:
                    setGame(
                        <Pelmanism
                            task={[task[0], task[1]]}
                            isSolved={isSolved}
                            setIsSolved={setIsSolved}
                            isGood={isGood}
                            setIsGood={setIsGood}
                            handleSolved={handleSolved}
                        />
                    );
                    break;
                case 4:
                    setIsGood(true);
                    setGame(
                        <Story
                            data={task as unknown as SentenceStoryLine}
                            isSolved={isSolved}
                            setIsSolved={setIsSolved}
                            isGood={isGood}
                            setIsGood={setIsGood}
                            handleSolved={handleSolved}
                        />
                    );
                    break;
            }
        }
    }, [task, isSolved]);

    const handleSolved = () => {
        setGameCount((gameCount) => gameCount + 1);
        if (isGood) {
            setPoint((point) => point + 1);
            setIsInRow(true);
            setRow((row) => row + 1);
            setIsGood(false);
        } else {
            setIsInRow(false);
            setRow(0);
        }
        setIsSolved(false);
        if (gameCount === 10) {
            setIsFinished(true);
        }
    };

    const handleFinished = () => {
        updatePoints(
            session!.user!.totalPoints! + point,
            session!.user!.id!,
            isProgressUpdateBoolean!,
            session!.user!.interfaceLanguage!,
            session!.user!.targetLanguage!,
        ).then((response) => {
            if (response) {
                update({id: session!.user!.id, type: "updatePoints"}).then(
                    (response) => {
                        router.push("/");
                    }
                );
            }
        });
    }
    return (
        <div>
            {!session && (
                <>
                    <AccessDenied/>
                    <SignUpButton/>
                </>
            )}
            {session && !isFinished && (
                <div>
                    <div className="flex justify-center">
                        {LinearWithValueLabel(gameCount)}
                    </div>
                    <div className="text-red-600 inline grid justify-center  text-lg h-2">
                         {isInRow && row > 1 && <p className="inline-block pt-1 align-end"><AiTwotoneFire className="inline-block"/> {row} in a row!</p>}
                    </div>
                    <br/>
                    {game}
                </div>
            )}
            {isFinished && (
                <div className="drop-shadow-2xl">
                    <div className="text-center m-10">Congratulations!</div>
                    <div className="text-center">
                        You finished the lesson! Your points:
                    </div>
                    <div className="text-2xl text-center m-5">{point}</div>
                    <div className="flex justify-center m-10">
                        <button
                            className="p-5 text-center w-56 rounded md:rounded-full border-2 hover:border-4"
                            onClick={handleFinished}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

