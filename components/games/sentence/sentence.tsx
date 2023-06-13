import React, { useState } from "react";
import styles from "@/styles/Senctence.module.css";
import Word from "@/components/games/sentence/Word";
import Hover from "@/components/games/sentence/Hover";
import { FormatLessons } from "@/components/FormatLessons";

export default function Sentence({
  sentence,
  isSolved,
  setIsSolved,
  isGood,
  setIsGood,
  handleSolved,
}) {
  const [task, setTask] = useState(sentence);
  const [answer, setAnswer] = useState([]);

  const handleCheck = () => {
    let finalAnswer: string = "";
    answer.map((word) => {
      finalAnswer = finalAnswer.concat(word.word + " ");
    });
    finalAnswer = finalAnswer.trimEnd();
    if (finalAnswer === task.solution) {
      setIsGood(true);
      setIsSolved(true);
    } else {
      setIsSolved(true);
    }
  };
  const handleClick = (id, nextVisible: boolean) => {
    let newTask = { ...task };
    newTask.words.map((word) => {
      if (word.id === id && !nextVisible) {
        word.isVisible = nextVisible;
        const nextAnswer = answer;
        nextAnswer.push(word);
        setAnswer(nextAnswer);
      }
      if (word.id === id && nextVisible) {
        word.isVisible = nextVisible;
        if (answer.length === 1) {
          setAnswer([]);
        } else {
          const remItem = answer.indexOf(word);
          let nextAnswer = answer;
          nextAnswer.splice(remItem, 1);
          setAnswer(nextAnswer);
        }
      }
    });

    setTask(newTask);
  };

  return (
    <>
      <h3 className="mt-10 text-l font-medium grid justify-items-center">
        Translate this sentence!
      </h3>
      <div className="mt-10 grid justify-items-center">
        <div>
          {task.original.map((value, number) => (
            <Hover word={value.word} id={number} hover={value.hover} />
          ))}
        </div>
        <div className={FormatLessons.sentenceAnswer}>
          {answer.map((value, index) => (
            <div
              className={FormatLessons.sentenceWordAfterUsing}
              id={index.toString()}
              onClick={isSolved ? null : () => handleClick(value.id, true)}
            >
              {value.word}
            </div>
          ))}
        </div>
        <div>
          {task.words.map((value) => (
            <Word
              word={value.word}
              id={value.id}
              isVisible={value.isVisible}
              handleClick={handleClick}
              isSolved={isSolved}
            />
          ))}
        </div>
      </div>
      {isSolved && (
        <div>
          <div
            className={
              isGood
                ? FormatLessons.sentenceGoodAnswer
                : FormatLessons.sentenceWrongAnswer
            }
          >
            {isGood ? <h3>Correct Answer</h3> : <h3>Incorrect Answer</h3>}
            {isGood ? null : <h4>Correct Answer:</h4>}
            {isGood ? null : task.solution}
            <br />
          </div>
          <div>
            {isSolved && (
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
        </div>
      )}
      {!isSolved && (
        <div className="flex justify-center m-10">
          <button
            className="p-5 text-center w-56 rounded md:rounded-full border-2 hover:border-4"
            onClick={() => handleCheck()}
          >
            Continue
          </button>
        </div>
      )}
    </>
  );
}
