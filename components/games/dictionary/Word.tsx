import { FormatLessons } from "@/components/FormatLessons";
import React, { useEffect, useState } from "react";
import { ChooseType } from "./dictionary";

type Props = {
  word: string;
  isVisible: boolean;
  isSelected: boolean;
  id: number;
  wordType: string;
  fetchData: () => void;
  handleClick: (id: number, wordType: string) => void;
  isWrong: { or_id: number | null; tr_id: number | null };
  setIsWrong: React.Dispatch<React.SetStateAction<ChooseType>>;
};

const Word = ({
  word,
  wordType,
  isVisible,
  id,
  fetchData,
  isSelected,
  handleClick,
  isWrong,
  setIsWrong,
}: Props) => {
  const [style, setStyle] = useState<string | null>(null);

  useEffect(() => {
    if (isSelected) {
      setStyle(FormatLessons.choose);
    } else {
      setStyle(FormatLessons.visible);
    }
    if (!isVisible) {
      setStyle(FormatLessons.invisible);
    }
  }, [isVisible, isSelected, isWrong]);

  useEffect(() => {
    if (
      (isWrong.or_id === id && wordType === "original") ||
      (isWrong.tr_id === id && wordType === "translated")
    ) {
      setStyle(FormatLessons.wrongAnswer);
      const interval = setInterval(() => {
        setIsWrong({ or_id: null, tr_id: null });
        fetchData();
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isWrong]);

  return (
    <div
      className={style || ""}
      id={"orig_" + id.toString()}
      onClick={isVisible ? () => handleClick(id, wordType) : undefined}
    >
      {word}
    </div>
  );
};

export default Word;
