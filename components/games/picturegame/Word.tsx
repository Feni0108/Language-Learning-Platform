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
      setStyle(FormatLessons.pictureGameChoose);
    } else {
      setStyle(FormatLessons.pictureGameVisible);
    }
    if (isSolved && isGood && answer === id) {
      setStyle(FormatLessons.pictureGameGoodAnswer);
    }
    if (isSolved && !isGood && answer === id) {
      setStyle(FormatLessons.pictureGameWrongAnswer);
    }
  }, [isSolved, isSelected, isGood]);

  return (
    <div
      key={"picture" + id}
      onClick={!isSolved ? () => handleClick(id) : undefined}
      className={style}
    >
      <div className={FormatLessons.pictureGameImage}>
        <img
          className="object-center"
          src={`data:image/jpeg;base64,${image}`}
        />
      </div>
      <div className="m-1 flex flex-inline justify-center">{word}</div>
    </div>
  );
};

export default Word;
