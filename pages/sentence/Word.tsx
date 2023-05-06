import styles from "@/styles/Senctence.module.css";
import React, {useEffect, useState} from "react";


type Props = {
    word: string;
    isVisible: boolean;

    id:number;
    fetchData: () => void;
    handleClick: (id:number, nextVisible:boolean) => void;

    task: object;
    setTask: (val: object) => void;
    answer: object;
    setAnswer: (val: object) => void;



}

const Word = ({
                  word,
                  isVisible,
                  id,
                  fetchData,
                  handleClick,
                   task,
                setTask,
                setAnswer,
                  answer,


              }: Props) => {
    const [style, setStyle] = useState<string>(null);

    useEffect(() => {
        console.log("Invoke useEffect")
        console.log(isVisible)
        if (isVisible){
            setStyle(styles.word)
        } else {
            setStyle(styles.invisible)
        }
    },[isVisible]);


    return (
        <div
            className={style}
            id={'orig_' + id.toString()}
            onClick={isVisible ? () => handleClick(id, false) : null}
        >
            {word}
        </div>
    )

}


export default Word;