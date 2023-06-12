import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import prisma from "../../lib/prisma";
import { getOptions } from "@/components/games/gameComponentBackend/getRandomWord";
import Card from "@/components/Card";

export const getServerSideProps: GetServerSideProps = async () => {
  const words = await prisma.dictionary.findMany();
  const fourWords = getOptions(words);
  return {
    props: { allWords: fourWords },
  };
};

const Pelmanism = ({ allWords }) => {

  const [originalWords, setOriginalWords] = useState(allWords[0]);
  const [translatedWords, setTranslatedWords] = useState(allWords[1]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [clicks, setClicks] = useState(0);


  useEffect(() => {
    if (matchedCards.length === originalWords.length) {
      // All cards have been matched, game over logic
      console.log("Game over");
    }
  }, [matchedCards, originalWords]);

  const handleCardClick = (index) => {
    if (
      flippedCards.length < 2 &&
      !flippedCards.includes(index) &&
      !matchedCards.includes(index)
    ) {
      console.log("Card clicked:", index);
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
  console.log(visibleCards);
  console.log(flippedCards);
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [cardIndex1, cardIndex2] = flippedCards;
      const card1 = visibleCards[cardIndex1];
      const card2 = visibleCards[cardIndex2];
    console.log(card1);
      console.log(card2);
      console.log(card1.pairingData === card2.pairingData);
      if (
        card1 &&
        card2 &&
        card1.pairingData === card2.pairingData
      ) {
        // Match found
        setTimeout(() => {
          setMatchedCards((prevMatchedCards) => [...prevMatchedCards, cardIndex1, cardIndex2]);
          //setFlippedCards([]);
        }, 1000);
      } else {
        // No match, flip cards back after a delay
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
    console.log(matchedCards);
  }, [flippedCards, visibleCards]);

  


  return (
    <div className="cards-container">
      <div className="card-grid">
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
  );
};

export default Pelmanism;
