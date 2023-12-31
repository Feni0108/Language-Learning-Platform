import React, { useEffect, useState } from "react";
import Card from "@/components/games/pelmanism/Card";
import { FormatLessons } from "@/components/FormatLessons";
import i18n from "@/i18n/i18n";

type WordData = {
  original_word: string;
  translated_word: string;
  id: number;
  isVisible: boolean;
  isSelected: boolean;
};

type PelmanismProps = {
  task: [WordData[], WordData[]];
  isSolved: boolean;
  setIsSolved: (isSolved: boolean) => void;
  isGood: boolean;
  setIsGood: (isGood: boolean) => void;
  handleSolved: () => void;
};

const Pelmanism = ({
  task,
  isSolved,
  setIsSolved,
  isGood,
  setIsGood,
  handleSolved,
}: PelmanismProps) => {
  const t = (key: string) => i18n.t(key);
  const [originalWords, setOriginalWords] = useState<WordData[]>(task[0]);
  const [translatedWords, setTranslatedWords] = useState<WordData[]>(task[1]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    if (matchedCards.length / 2 === originalWords.length) {
      // All cards have been matched, game over logic
      setIsSolved(true);
      setIsGood(true);
    }
  }, [matchedCards, originalWords]);

  const handleCardClick = (index: number) => {
    if (
      flippedCards.length < 2 &&
      !flippedCards.includes(index) &&
      !matchedCards.includes(index)
    ) {
      setFlippedCards([...flippedCards, index]);
      setClicks(clicks + 1);
    }
  };

  useEffect(() => {
    if (clicks === 2) {
      setTimeout(() => {
        setFlippedCards([]);
        setClicks(0);
      }, 1000);
    }
  }, [clicks]);

  const visibleCards = [...originalWords, ...translatedWords].map(
    (word, index) => {
      return {
        word: word.original_word || word.translated_word,
        index: index,
        pairingData: word.id,
        isMatched: matchedCards.includes(index),
      };
    }
  );
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [cardIndex1, cardIndex2] = flippedCards;
      const card1 = visibleCards[cardIndex1];
      const card2 = visibleCards[cardIndex2];
      console.log(card1);
      console.log(card2);
      console.log(card1.pairingData === card2.pairingData);
      if (card1 && card2 && card1.pairingData === card2.pairingData) {
        // Match found
        setTimeout(() => {
          setMatchedCards((prevMatchedCards) => [
            ...prevMatchedCards,
            cardIndex1,
            cardIndex2,
          ]);
          //setFlippedCards([]);
        }, 1000);
      } else {
        // No match, flip cards back after a delay
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards, visibleCards]);

  return (
    <div>
      <p className="mt-10 text-l font-medium grid justify-items-center">
        {t('Find_the_mathcing_pairs')!}
      </p>
      <div className="flex justify-center m-10">
        <div className="grid grid-cols-4 gap-5">
          {visibleCards.map((word, index) => (
            <Card
              key={index}
              word={word.word}
              isFlipped={flippedCards.includes(index)}
              isMatched={word.isMatched}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
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
  );
};

export default Pelmanism;
