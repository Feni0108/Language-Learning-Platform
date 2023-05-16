import {FormatLessons} from "@/components/FormatLessons";
import React, {useEffect, useState} from "react";
import {set} from "yaml/dist/schema/yaml-1.1/set";


type Props = {
    word: string;

    isSelected: boolean
    id:number;

    handleClick: (id:number) => void;

    image: string;

    isGood: boolean;

    answer: number;





}

const Word = ({
                  word,
                  isSolved,
                  id,
                  isSelected,
                  handleClick,
                image,
    isGood,
    answer
              }: Props) => {
    const [style, setStyle] = useState<string>(null);

    useEffect(() => {
        if (isSelected){
            setStyle(FormatLessons.choose)
        } else {
            setStyle(FormatLessons.visible)
        }
        if (isSolved && isGood){
            setStyle(FormatLessons.goodAnswer)
        }
        if (isSolved && !isGood && answer === id){
            setStyle(FormatLessons.wrongAnswer)
        }
    },[isSolved, isSelected, isGood]);

    /*useEffect(() => {
        if ((isWrong.or_id === id && wordType === "original") || (isWrong.tr_id === id && wordType === "translated")) {
            setStyle(FormatLessons.wrongAnswer);
            const interval = setInterval(() => {
                setIsWrong({or_id:null, tr_id:null})
                fetchData();
            }, 1500);
            return () => clearInterval(interval)
        }
    }, [isWrong])*/


    return (
        <div key={"picture"+id}
             onClick={!isSolved ? () => handleClick(id) : null}
            className={style}>
            <section>
                <img src={`data:image/jpeg;base64,${image}`} />
            </section>
            <section>
                {word}
            </section>
        </div>
    )

}


export default Word;