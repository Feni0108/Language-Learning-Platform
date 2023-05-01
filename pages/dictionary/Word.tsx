import styles from "@/styles/Dictionary.module.css";
import React, {useEffect, useState} from "react";


type Props = {
    word: string;
    isVisible: boolean

    isSelected: boolean
    id:number;
    wordType:string;

    fetchData: () => void;
    handleClick: (id:number, wordType:string) => void;



    isWrong: object;

    setIsWrong: (val: object) => void;



}

const Word = ({
    word,
    wordType,
    isVisible,
    id,
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
        if(!isVisible){
            setStyle(styles.invisible)
        }
    },[isVisible, isSelected, isWrong]);

    useEffect(() => {
            if ((isWrong.or_id === id && wordType === "original") || (isWrong.tr_id === id && wordType === "translated")) {
                setStyle(styles.wrongAnswer);
                const interval = setInterval(() => {
                    setIsWrong({or_id:null, tr_id:null})
                    fetchData();
                }, 1500);
                return () => clearInterval(interval)
            }
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