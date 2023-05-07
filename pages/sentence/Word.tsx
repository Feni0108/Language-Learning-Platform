import styles from "@/styles/Senctence.module.css";
import React, {useEffect, useState} from "react";


type Props = {
    word: string;
    isVisible: boolean;

    id:number;
    handleClick: (id:number, nextVisible:boolean) => void;

    task: object;
    setTask: (val: object) => void;
    answer: object;
    setAnswer: (val: object) => void;
    isSolved: boolean



}

const Word = ({
                  word,
                  isVisible,
                  id,
                  handleClick,
                   task,
                setTask,
                setAnswer,
                  answer,
    isSolved


              }: Props) => {
    const [style, setStyle] = useState<string>(null);

    useEffect(() => {
        if (isVisible){
            setStyle(styles.word)
        } else {
            setStyle(styles.invisible)
        }
    },[isVisible,isSolved]);


    return (
        <div
            className={style}
            id={'orig_' + id.toString()}
            onClick={(isVisible && !isSolved) ? () => handleClick(id, false) : null}
        >
            {word}
        </div>
    )

}


export default Word;