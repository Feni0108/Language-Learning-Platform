import styles from "@/styles/Dictionary.module.css";
import React, {ReactNode, useEffect, useState} from "react";

type Props = {
    choose: object;
    setChoose: (val: object) => void;
    word: string;
    isVisible: boolean
    id:number;
    wordType:string;
    solvedCorrect: Array<number>;
    solvedWrong: Array<number>;

}

const Word = ({
    choose,
    setChoose,
    word,
    wordType,
    isVisible,
    id,
    solvedCorrect,
    solvedWrong

              }: Props) => {
    const [style, setStyle] = useState(null);

    useEffect(() => {
        if(solvedCorrect.some((e) => e===id)) {
            setStyle(styles.invisible)
        }
        if (solvedWrong.some((e)=> e===id)) {
            setStyle(styles.wrongAnswer)
        }
    },[isVisible]);
    const handleClick = (id, wordType: string) => {
        if (wordType === "original") {
            const newChoose = choose;
            newChoose.or_id = id
            setChoose(newChoose);
        } else if (wordType === "translated") {
            const newChoose = choose
            newChoose.tr_id = id
            setChoose(newChoose);
        }}

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