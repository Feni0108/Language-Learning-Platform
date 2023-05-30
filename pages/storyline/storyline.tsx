import React from "react";
import { useState, useEffect } from "react";
import prisma from "@/lib/prisma";
import { GetServerSideProps } from "next";

let words: { id: number; word: string; isVisible: boolean }[] = [];

const createWords = (story: any) => {
  const getWords = story.words.split(" ");

  words = [];
  for (let i = 0; i < getWords.length; i++) {
    words.push({ id: i + 1, word: getWords[i], isVisible: true });
  }

  return words;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const storyline = await prisma.storyline.findMany();

  const MAX_ID = storyline.length;
  const randomId = Math.floor(Math.random() * MAX_ID);

  const story = storyline[randomId];

  const words = createWords(story);
  const sentences = story.sentences.split(";");

  return {
    props: {
      data: { sentences, words },
    },
  };
};

export default function Story(props: any) {
  const [currentSentence, setCurrentSentence] = useState(0);
  const [displayedSentence, setDisplayedSentence] = useState<string[]>([]);

  const sentences = props.data.sentences;
  console.log(sentences);

  const words = props.data.words;
  console.log(words)

  useEffect(() => {
    if (currentSentence < sentences.length) {
      // if sentence contains ___ () {

      //if handleCheckButtoon() {

      //}
      //}

      const timer = setTimeout(() => {
        setDisplayedSentence((prevSentence) => [
          ...prevSentence,
          sentences[currentSentence],
        ]);
        setCurrentSentence((prevIndex) => prevIndex + 1);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentSentence]);

  return (
    <div>
      {displayedSentence.map((sentence, index) => (
        <div key={index}>{sentence}</div>
      ))}
    </div>
  );
}
