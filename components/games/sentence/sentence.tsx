import React, { useState } from "react";
import styles from "@/styles/Senctence.module.css";
import Word from "@/components/games/sentence/Word";
import Hover from "@/components/games/sentence/Hover";
import { FormatLessons } from "@/components/FormatLessons";
import i18n from "@/i18n/i18n";

export type Original = {
  word: string;
  hover: string[];
};
export type Words = {
  id: number;
  word: string;
  isVisible: boolean;
};

export type SentenceTask = {
  original: Original[];
  solution: string;
  words: Words[];
};

type SentenceProps = {
  sentence: SentenceTask;
  isSolved: boolean;
  setIsSolved: (isSolved: boolean) => void;
  isGood: boolean;
  setIsGood: (isGood: boolean) => void;
  handleSolved: () => void;
};

export default function Sentence({
  sentence,
  isSolved,
  setIsSolved,
  isGood,
  setIsGood,
  handleSolved,
}: SentenceProps) {
  const t = (key: string) => i18n.t(key);
  const [task, setTask] = useState<SentenceTask>(sentence);
  const [answer, setAnswer] = useState<Words[]>([]);
  const [hover, setHover] = useState<string>("");

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

  const handleClick = (id: number, nextVisible: boolean) => {
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
        {t('Translate_this_sentence')}
      </h3>
      <div className="mt-10 grid justify-items-center">
        <div>
          <div className="flex  justify-center text-xs italic min-h-full h-0">{hover}</div>
          {task.original.map((value, number) => (
            <Hover word={value.word} id={number} hover={value.hover} setHover={setHover} />
          ))}
        </div>
      </div>
      <div className="mt-10 grid justify-items-center">
      <div className={FormatLessons.sentenceAnswer}>
        {answer.map((value, index) => (
          <div
            className={FormatLessons.sentenceWordAfterUsing}
            id={index.toString()}
            onClick={isSolved ? undefined : () => handleClick(value.id, true)}
          >
            {value.word}
          </div>
        ))}
      </div>
      <div className="mt-10">
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
            {isGood ? <h3>{t('Correct_answer')}</h3> : <h3>{t('Incorrect_answer')}</h3>}
            {isGood ? null : <h4>{t('Correct_answer')}:</h4>}
            {isGood ? null : task.solution}
            <br />
          </div>
          <div>
            {isSolved && (
              <div className="flex justify-center pt-10">
                <button
                  className="p-5 text-center w-56 rounded md:rounded-full border-2 hover:border-4 mt-10"
                  onClick={() => handleSolved()}
                >
                  {t('Continue')}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {!isSolved && answer.length >0 && (
        <div className="flex justify-center m-10">
          <button
            className="p-5 text-center w-56 rounded md:rounded-full border-2 hover:border-4 mt-10"
            onClick={() => handleCheck()}
          >
            {t('Continue')}
          </button>
        </div>
      )}
    </>
  );
}
