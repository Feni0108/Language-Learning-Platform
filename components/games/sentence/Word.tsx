import styles from "@/styles/Senctence.module.css";
import React, {useEffect, useState} from "react";


type Props = {
    word: string;
    isVisible: boolean;

    id:number;
    handleClick: (id:number, nextVisible:boolean) => void;
    isSolved: boolean;



}

const Word = ({
                  word,
                  isVisible,
                  id,
                  handleClick,
    isSolved


              }: Props) => {
    const [style, setStyle] = useState<string>("");

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
            onClick={(isVisible && !isSolved) ? () => handleClick(id, false) : undefined}
        >
            {word}
        </div>
    )

}


export default Word;