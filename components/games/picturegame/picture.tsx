import React, { useEffect, useState } from "react";
import { FormatLessons } from "@/components/FormatLessons";
import { number, string } from "prop-types";
import Word from "@/components/games/picturegame/Word";
import i18n from "@/i18n/i18n";

type Solution = {
  id: number;
  word: string;
};

type Picture = {
  id: number;
  image: string;
  isSelected: boolean;
  word: string;
};

type PictureProps = {
  allWords: [Solution, Picture[]];
  isSolved: boolean;
  setIsSolved: (isSolved: boolean) => void;
  isGood: boolean;
  setIsGood: (isGood: boolean) => void;
  handleSolved: () => void;
};

export default function Picture({
  allWords,
  isSolved,
  setIsSolved,
  isGood,
  setIsGood,
  handleSolved,
}: PictureProps) {
  const t = (key: string) => i18n.t(key);
  const [task, setTask] = useState<[Solution, Picture[]]>(allWords);
  const [word, setWord] = useState<Solution | undefined>();
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [answer, setAnswer] = useState<number | undefined>(undefined);

  useEffect(() => {
    setWord(task[0] as { id: number; word: string });
    setPictures(task[1]);
  }, [task]);

  const handleCheck = () => {
    if (word && answer === word.id) {
      setIsGood(true);
      setIsSolved(true);
    } else {
      setIsSolved(true);
    }
  };
  const handleClick = (id: number) => {
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
      {word && (
        <h2 className="mt-10 text-l font-medium grid justify-items-center">
          {" "}
          {t('Which_one_of_these_is')} "{word.word}"?
        </h2>
      )}
      <div className="mt-10 flex flex-row">
        {pictures &&
          pictures.map((value) => (
            <div className="w-64 m-auto">
              <Word
                key={value.id}
                word={value.word}
                id={value.id}
                isSelected={value.isSelected}
                handleClick={handleClick}
                isSolved={isSolved}
                image={value.image}
                answer={answer ?? 0}
                isGood={isGood}
              />
            </div>
          ))}
      </div>
      {isSolved && (
        <div
          className={
            isGood
              ? FormatLessons.pictureGameGoodAnswer
              : FormatLessons.pictureGameWrongAnswer
          }
        >
          {isGood ? <h3>{t('Correct_answer')}</h3> : <h3>{t('Incorrect_answer')}</h3>}
          {isGood ? null : <h4>{t('Correct_answer')}:</h4>}
          {isGood
            ? null
            : pictures.find((picture) => picture.id === word?.id)?.word}
          <br />
          {isSolved && (
            <div className="flex justify-center m-10">
              <button
                className="p-5 text-center w-56 rounded md:rounded-full border-2 hover:border-4"
                onClick={() => handleSolved()}
              >
                {t('Continue')}
              </button>
            </div>
          )}
        </div>
      )}
      {!isSolved && answer != null && (
        <div className="flex justify-center m-10">
          <button
            className="p-5 text-center w-56 rounded md:rounded-full border-2 hover:border-4"
            onClick={() => handleCheck()}
          >
            {t('Continue')}
          </button>
        </div>
      )}
    </div>
  );
}
