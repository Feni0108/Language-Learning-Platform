import React from "react";
import styles from "../../../styles/Card.module.css";

type CardProps = {
    word: string;
    isFlipped: boolean;
    isMatched: boolean;
    onClick: () => void;
  };
  
  const Card = ({ word, isFlipped, isMatched, onClick }: CardProps) => {
    const handleClick = () => {
      onClick();
    };

    return (
        <div
            className={`${styles.card} ${isFlipped ? styles.flipped : ""} ${
                isMatched ? styles.matched : ""
            }`}
            onClick={handleClick}
        >
            <div className={styles.front}>
                <span>{word}</span>
            </div>
            <div className={styles.back}>
                <span>Translated</span>
            </div>
        </div>
    );
};

export default Card;