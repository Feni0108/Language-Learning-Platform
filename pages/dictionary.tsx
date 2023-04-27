import {getOptions} from "@/utils/getRandomWord";
import {useContext, useEffect, useState} from "react";
import styles from '../styles/Dictionary.module.css'



export default function Dictionary() {
    const [words, setWords] = useState([]);
    const [choose, setChoose] = useState({or_id:null,tr_id:null});
    const [count, setCount] = useState(0);
    //const [isButton, setIsButton] = useState(false);
    const [originalWords, setOriginalWords] = useState([]);
    const [translatedWords, setTranslatedWords] = useState([]);


    useEffect(() => {
        setWords(getOptions())
    },[]);

    useEffect(() => {
        setOriginalWords(words[0]);
        setTranslatedWords(words[1]);
    },[words]);

    useEffect(() => {
        /*if (count === 4){
            setIsButton(true);
        }*/
        if (choose.or_id!= null && choose.tr_id!= null && choose.or_id===choose.tr_id){
            setCount(count+1);
            setInactive(choose);
            setChoose({or_id: null, tr_id: null});
            }

    },[choose]);


    const setInactive = (choose) => {
        const newOriginalWords = originalWords;
        newOriginalWords.map(word => {
            if (word.id === choose.or_id){
                word.isVisible = false;
            }
        })
        setOriginalWords(newOriginalWords);
        const newTranslatedWords = translatedWords;
        newTranslatedWords.map(word => {
            if (word.id === choose.tr_id){
                word.isVisible = false;
            }
        })
        setTranslatedWords(newTranslatedWords);
    }
    const handleClick = (id, wordType: string) => {
        if (wordType === "original"){
            const newChoose = {...choose}
            newChoose.or_id = id
            setChoose(newChoose);
        } else if (wordType === "translated"){
            const newChoose = {...choose}
            newChoose.tr_id = id
            setChoose(newChoose);
        }


        //Use Context API at the end
        //Todo: If Click one of the divs, first checks whether you were previously selected - completed
        //Todo: If it was selected and the same: nothing happens  -  completed
        //Todo: If it was selected and is not the same: switch to the other word   -   completed
        //Todo: If it was selected and paired with another word, Tests whether the selection is good:
            //Todo: If it's good, then the count increment by one, and empty the choose - competed
            //Todo: If it is wrong, it just empties the choose
        //Todo: Feedback on UI with CSS formatting
    }



    return (
        <>

            <h1>Hello World</h1>
            <div>
                <div>
                {originalWords && originalWords.map((value, index) => (
                    <div
                        className={value.isVisible ?  (value.id === choose.or_id ? styles.choose : '') : styles.invisible}
                        id={'orig_'+value.id.toString()}
                         key={index}
                         onClick={value.isVisible ? () => handleClick(value.id, "original") : null}

                    >
                        {value.original_word}
                    </div>
                ))}
                </div>
                <div>
                    {translatedWords && translatedWords.map((translated, index) => (
                        <div
                            className={translated.isVisible ?  (translated.id === choose.tr_id ? styles.choose : '') : styles.invisible}
                            id={'orig_'+translated.id.toString()}
                            key={index}
                            onClick={translated.isVisible ? () => handleClick(translated.id, "translated") : null}
                        >
                            {translated.translated_word}
                        </div>
                    ))}

                </div>
        </div>
            {count===4 && <button>Next task</button>}

        </>
    )
}

/*


 */