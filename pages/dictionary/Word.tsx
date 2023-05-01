import styles from "@/styles/Dictionary.module.css";
import React, {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";


type Props = {
    choose: object;
    setChoose: (val: object) => void;
    word: string;
    isVisible: boolean

    isSelected: boolean
    id:number;
    wordType:string;
    solvedCorrect: Array<number>;
    solvedWrong: Array<number>;

    fetchData: () => void;
    handleClick: (id:number, wordType:string) => void;



}

const Word = ({
    choose,
    setChoose,
    word,
    wordType,
    isVisible,
    id,
    solvedCorrect,
    solvedWrong,
    fetchData,
    isSelected,
    handleClick

}: Props) => {
    const [style, setStyle] = useState<string>(null);

    useEffect(() => {

        if (isSelected){
            setStyle(styles.choose)
        } else {
            setStyle(styles.visible)
        }
        if(solvedCorrect.some((e) => e===id)) {
            setStyle(styles.invisible)
        }
        if (solvedWrong.some((e)=> e===id)) {
            setStyle(styles.wrongAnswer)
        }
    },[isVisible, isSelected]);



        return (
            <div
                className={style}

                id={'orig_' + id.toString()}
                onClick={isVisible ? () => handleClick(id, wordType) : null}
            >
                {console.log(style)}
                {word}
            </div>
        )

}


export default Word;