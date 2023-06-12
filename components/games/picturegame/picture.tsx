import React, { useEffect, useState } from "react";
import { FormatLessons } from "@/components/FormatLessons";
import { number, string } from "prop-types";
import Word from "@/components/games/picturegame/Word";

export default function Picture({
  allWords,
  isSolved,
  setIsSolved,
  isGood,
  setIsGood,
  handleSolved,
}) {
  const [task, setTask] = useState(allWords);
  const [word, setWord] = useState({ id: number, word: string });
  const [pictures, setPictures] = useState([]);
  const [answer, setAnswer] = useState<number>(null);

  useEffect(() => {
    console.log(task);
    setWord(task[0]);
    setPictures(task[1]);
  }, [task]);

  const handleCheck = () => {
    if (answer === word.id) {
      setIsGood(true);
      setIsSolved(true);
    } else {
      setIsSolved(true);
    }
  };
  const handleClick = (id) => {
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
      <h2 className="mt-10 text-l font-medium grid justify-items-center">
        {" "}
        Which one of these is "{word.word}"?
      </h2>
      <div className="mt-10 flex flex-row">
        {pictures &&
          pictures.map((value) => (
            <div className="w-64 m-auto">
              <Word
                word={value.word}
                id={value.id}
                isSelected={value.isSelected}
                handleClick={handleClick}
                isSolved={isSolved}
                image={value.image}
                answer={answer}
                isGood={isGood}
              />
            </div>
          ))}
      </div>
      {isSolved && (
        <div
          className={
            isGood ? FormatLessons.goodAnswer : FormatLessons.wrongAnswer
          }
        >
          {isGood ? <h3>Correct Answer</h3> : <h3>Incorrect Answer</h3>}
          {isGood ? null : <h4>Correct Answer:</h4>}
          {isGood
            ? null
            : pictures.find((picture) => picture.id === word.id).word}
          <br />
          {isSolved && (
            <div>
              <button onClick={() => handleSolved()}>Continue</button>
            </div>
          )}
        </div>
      )}
      {!isSolved && answer != null && (
        <div className="flex justify-center m-10">
          <button
            className="p-5 text-center w-56 rounded md:rounded-full border-2 hover:border-4"
            onClick={() => handleSolved()}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}
