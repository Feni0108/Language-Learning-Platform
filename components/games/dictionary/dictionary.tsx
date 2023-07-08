import React, { useEffect, useState } from "react";
import Word from "./Word";
import { FormatLessons } from "@/components/FormatLessons";
import i18n from "@/i18n/i18n";

type WordData = {
  original_word: string;
  translated_word: string;
  id: number;
  isVisible: boolean;
  isSelected: boolean;
};

type DictionaryProps = {
  task: [WordData[], WordData[]];
  isSolved: boolean;
  setIsSolved: (isSolved: boolean) => void;
  isGood: boolean;
  setIsGood: (isGood: boolean) => void;
  handleSolved: () => void;
};

export type ChooseType = {
  or_id: number | null;
  tr_id: number | null;
};

const Dictionary = ({
  task,
  isSolved,
  setIsSolved,
  isGood,
  setIsGood,
  handleSolved,
}: DictionaryProps) => {
  const t = (key: string) => i18n.t(key);
  const [words, setWords] = useState(task);
  const [choose, setChoose] = useState<ChooseType>({
    or_id: null,
    tr_id: null,
  });
  const [solvedCorrect, setSolvedCorrect] = useState(0);
  const [originalWords, setOriginalWords] = useState<WordData[]>([]);
  const [translatedWords, setTranslatedWords] = useState<WordData[]>([]);
  const [isWrong, setIsWrong] = useState<ChooseType>({
    or_id: null,
    tr_id: null,
  });

  useEffect(() => {
    setOriginalWords(words[0]);
    setTranslatedWords(words[1]);
    setIsGood(true);
  }, [words]);

  useEffect(() => {
    if (solvedCorrect === 4) setIsSolved(true);
  }, [solvedCorrect]);

  let fetchData = () => {
    if (
      choose.or_id != null &&
      choose.tr_id != null &&
      choose.or_id === choose.tr_id
    ) {
      setSolvedCorrect(solvedCorrect + 1);
      setInactive(choose);
      setChoose({ or_id: null, tr_id: null });
    }
    if (
      choose.or_id != null &&
      choose.tr_id != null &&
      choose.or_id !== choose.tr_id
    ) {
      setIsGood(false);
      setIsWrong({ or_id: choose.or_id, tr_id: choose.tr_id });
      setWrong(choose);
      setChoose({ or_id: null, tr_id: null });
    }
  };
  const setWrong = (choose: { or_id: number | null; tr_id: number | null }) => {
    const newOriginalWords = originalWords;
    newOriginalWords.map((word) => {
      if (word.id === choose.or_id) {
        word.isSelected = false;
      }
    });
    setOriginalWords(newOriginalWords);

    const newTranslatedWords = translatedWords;
    newTranslatedWords.map((word) => {
      if (word.id === choose.tr_id) {
        word.isSelected = false;
      }
    });
    setTranslatedWords(newTranslatedWords);
  };

  const setInactive = (choose: {
    or_id: number | null;
    tr_id: number | null;
  }) => {
    const newOriginalWords = originalWords;
    newOriginalWords.map((word) => {
      if (word.id === choose.or_id) {
        word.isVisible = false;
      }
    });
    setOriginalWords(newOriginalWords);

    const newTranslatedWords = translatedWords;
    newTranslatedWords.map((word) => {
      if (word.id === choose.tr_id) {
        word.isVisible = false;
      }
    });
    setTranslatedWords(newTranslatedWords);
  };

  const handleClick = (id: number, wordType: string) => {
    if (wordType === "original") {
      const newOriginalWords = originalWords;
      newOriginalWords.map((word) => {
        if (word.id === choose.or_id) {
          word.isSelected = false;
        }
        if (word.id === id) {
          word.isSelected = true;
        }
      });
      setOriginalWords(newOriginalWords);
      const newChoose = { ...choose };
      newChoose.or_id = id;
      setChoose(newChoose);
    } else if (wordType === "translated") {
      const newTranslatedWords = translatedWords;
      newTranslatedWords.map((word) => {
        if (word.id === choose.tr_id) {
          word.isSelected = false;
        }
        if (word.id === id) {
          word.isSelected = true;
        }
      });
      setTranslatedWords(newTranslatedWords);
      const newChoose = { ...choose };
      newChoose.tr_id = id;
      setChoose(newChoose);
    }
    fetchData();
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div />
      <h3 className="mt-10 text-xl font-medium grid justify-items-center">
        {t('Pair_the_right_words')}!
      </h3>
      <div className="mt-10 flex flex-row">
        <div className="w-64 m-auto">
          {originalWords &&
            originalWords.map((value, index) => (
              <div key={"or" + index}>
                <Word
                  word={value.original_word}
                  wordType="original"
                  id={value.id}
                  isVisible={value.isVisible}
                  isSelected={value.isSelected}
                  fetchData={fetchData}
                  handleClick={handleClick}
                  isWrong={isWrong}
                  setIsWrong={setIsWrong}
                />
              </div>
            ))}
        </div>
        <div className="w-64 m-auto">
          {translatedWords &&
            translatedWords.map((value, index) => (
              <div key={"tr" + index}>
                <Word
                  word={value.translated_word}
                  wordType="translated"
                  id={value.id}
                  isVisible={value.isVisible}
                  isSelected={value.isSelected}
                  fetchData={fetchData}
                  handleClick={handleClick}
                  isWrong={isWrong}
                  setIsWrong={setIsWrong}
                />
              </div>
            ))}
        </div>
      </div>
      <div>
        {isSolved && (
          <div className="m-10 grid justify-items-center">
            <button
              className="p-5 text-center w-56 rounded md:rounded-full border-2 hover:border-4"
              onClick={() => handleSolved()}
            >
              {t('Continue')}
            </button>
          </div>
        )}
      </div>

      <div />
    </>
  );
};

export default Dictionary;
