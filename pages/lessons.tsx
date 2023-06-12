import React, { useEffect, useState } from "react";
import Dictionary from "@/components/games/dictionary/dictionary";
import Picture from "@/components/games/picturegame/picture";
import useFetch from "@/components/games/useFetch";
import Sentence from "@/components/games/sentence/sentence";
import Pelmanism from "@/components/games/pelmanism/pelmanism";
import { updatePoints } from "@/components/updatePoints";
import { useSession } from "next-auth/react";
import AccessDenied from "@/components/AccessDenied";
import SignUpButton from "@/components/SignUpButton";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Lessons() {
  const [isSolved, setIsSolved] = useState(false);
  const [gameCount, setGameCount] = useState(1);
  const [isGood, setIsGood] = useState(false);
  const [point, setPoint] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [row, setRow] = useState(0);
  const [isInRow, setIsInRow] = useState(true);
  const [id, setId] = useState<number>(null);
  const [game, setGame] = useState<any>();
  const [endpoint, setEndpoint] = useState("");
  const { loading, pics } = useFetch(endpoint);
  const { data: session, status, update } = useSession();
  const router = useRouter();

  const getRandomGames = () => {
    const randomId = Math.floor(Math.random() * 4);
    if (randomId !== id) {
      setId(randomId);
    } else getRandomGames();
  };

  useEffect(() => {
    getRandomGames();
  }, [gameCount]);

  useEffect(() => {
    switch (id) {
      case 0: {
        setEndpoint("api/getGamesData/dictionary");
        break;
      }
      case 1: {
        setEndpoint("api/getGamesData/picture");
        break;
      }
      case 2: {
        setEndpoint("api/getGamesData/sentence");
        break;
      }
      case 3: {
        setEndpoint("api/getGamesData/pelmanism");
        break;
      }
    }
  }, [id]);

  useEffect(() => {
    console.log(pics);
    if (pics.length !== 0) {
      switch (id) {
        case 0:
          setGame(
            <Dictionary
              allWords={pics}
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
              allWords={pics}
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
              sentence={pics}
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
              allWords={pics}
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
  }, [pics, isSolved]);

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
    if (gameCount === 5) {
      setIsFinished(true);
    }
  };

  const handleFinished = () => {
    updatePoints(session.user?.totalPoints + point, session.user?.id).then(
      (response) => {
        if (response) {
          update({ id: session.user.id }).then((response) => {
            router.push("/");
          });
        }
      }
    );
  };

  return (
    <div>
      {!session && (
        <>
          <AccessDenied />
          <SignUpButton />
        </>
      )}
      {session && !isFinished && (
        <div className="">
          Task {gameCount}/5 {isInRow && row > 1 && <p>{row} in a row!</p>}
          <br />
          {game}
        </div>
      )}
      {isFinished && (
        <div>
          <div>
            Congratulations! You finished the lesson! Your points: {point}
          </div>
          <button onClick={handleFinished}>Continue</button>
        </div>
      )}
    </div>
  );
}
