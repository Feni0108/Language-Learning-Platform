import styles from "@/styles/Dictionary.module.css";
import React, {useEffect, useRef, useState} from "react";
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



    isWrong: object;

    setIsWrong: (val: object) => void;



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
    handleClick,



    isWrong,
    setIsWrong

}: Props) => {
    const [style, setStyle] = useState<string>(null);

    useEffect(() => {
        console.log("setStyle");
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
    },[isVisible, isSelected, isWrong]);

    //const isInitialMount = useRef(true);

    useEffect(() => {
        //console.log(isInitialMount);
        /*if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {*/
            if ((isWrong.or_id === id && wordType === "original")) {
                //console.log("In the else" + isInitialMount.current);
                setStyle(styles.wrongAnswer);
                const interval = setInterval(() => {
                    setIsWrong({or_id:null, tr_id:null})
                    fetchData();
                }, 3000);
                return () => clearInterval(interval)
            }
        //}
    }, [isWrong])


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