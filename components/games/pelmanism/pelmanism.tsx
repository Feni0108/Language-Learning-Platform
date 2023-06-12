import React, { useEffect, useState } from "react";
import Card from "@/components/games/pelmanism/Card";
import { FormatLessons } from "@/components/FormatLessons";

const Pelmanism = ({
  allWords,
  isSolved,
  setIsSolved,
  isGood,
  setIsGood,
  handleSolved,
}) => {
  const [originalWords, setOriginalWords] = useState(allWords[0]);
  const [translatedWords, setTranslatedWords] = useState(allWords[1]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    if (matchedCards.length / 2 === originalWords.length) {
      // All cards have been matched, game over logic
      setIsSolved(true);
      setIsGood(true);
    }
  }, [matchedCards, originalWords]);

  const handleCardClick = (index) => {
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
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default Pelmanism;
