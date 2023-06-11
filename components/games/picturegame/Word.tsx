import { FormatLessons } from "@/components/FormatLessons";
import React, { useEffect, useState } from "react";

type Props = {
  word: string;
  isSolved: boolean;
  isSelected: boolean;
  id: number;

  handleClick: (id: number) => void;

  image: string;

  isGood: boolean;

  answer: number;
};

const Word = ({
  word,
  isSolved,
  id,
  isSelected,
  handleClick,
  image,
  isGood,
  answer,
}: Props) => {
  const [style, setStyle] = useState<string>("");

  useEffect(() => {
    if (isSelected) {
      setStyle(FormatLessons.choose);
    } else {
      setStyle(FormatLessons.visible);
    }
    if (isSolved && isGood && answer === id) {
      setStyle(FormatLessons.goodAnswer);
    }
    if (isSolved && !isGood && answer === id) {
      setStyle(FormatLessons.wrongAnswer);
    }
  }, [isSolved, isSelected, isGood]);

  return (
    <div
      key={"picture" + id}
      onClick={!isSolved ? () => handleClick(id) : undefined}
      className={style}
    >
      <section>
        <img src={`data:image/jpeg;base64,${image}`} />
      </section>
      <section>{word}</section>
    </div>
  );
};

export default Word;
