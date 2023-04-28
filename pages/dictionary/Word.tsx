import styles from "@/styles/Dictionary.module.css";
import React, { useEffect, useState} from "react";
import {render} from "react-dom";

type Props = {
    choose: object;
    setChoose: (val: object) => void;
    word: string;
    isVisible: boolean
    id:number;
    wordType:string;
    solvedCorrect: Array<number>;
    solvedWrong: Array<number>;

    fetchData: () => void;


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
    fetchData



              }: Props) => {
    const [style, setStyle] = useState(null);

    /*useEffect(() => {
        if (choose.or_id === id && wordType==="original"){
            setStyle(styles.choose)
        }
        if (choose.tr_id === id && wordType==="translated"){
            setStyle(styles.choose)
        }
        if(solvedCorrect.some((e) => e===id)) {
            setStyle(styles.invisible)
        }
        if (solvedWrong.some((e)=> e===id)) {
            setStyle(styles.wrongAnswer)
        }
    },[isVisible, choose]);
     */

    const changeStyle = () => {
        if ((choose.or_id === id && wordType==="original") || (choose.tr_id === id && wordType==="translated")){
            setStyle(styles.choose)
        }
        if (choose.or_id !== id && wordType==="original"){
            setStyle(null)
        }
        if(solvedCorrect.some((e) => e===id)) {
            setStyle(styles.invisible)
        }
        if (solvedWrong.some((e)=> e===id)) {
            setStyle(styles.wrongAnswer)
        }
    }
    const handleClick = (id, wordType: string) => {
        if (wordType === "original") {
            const newChoose = choose;
            newChoose.or_id = id
            setChoose(newChoose);
        } else if (wordType === "translated") {
            const newChoose = choose
            newChoose.tr_id = id
            setChoose(newChoose);
        }
        changeStyle()
        fetchData();
        console.log("In the child component: "+choose.or_id+" "+choose.tr_id)

    }

        return (
            <div
                className={style}
                id={'orig_' + id.toString()}
                onClick={isVisible ? () => handleClick(id, wordType) : null}
            >
                {word}
            </div>
        )



}


export default Word;