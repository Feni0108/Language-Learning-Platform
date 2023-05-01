import {getOptions} from "@/utils/getRandomWord";
import React, { useEffect, useState} from "react";
import styles from '../../styles/Dictionary.module.css'
import Word from './Word';




export default function Dictionary() {
    const [words, setWords] = useState([]);
    const [choose, setChoose] = useState({or_id:null,tr_id:null});
    const [solvedCorrect, setSolvedCorrect] = useState(0);
    const [originalWords, setOriginalWords] = useState([]);
    const [translatedWords, setTranslatedWords] = useState([]);
    const [isWrong, setIsWrong] = useState({or_id:null,tr_id:null});


    useEffect(() => {
        setWords(getOptions())
    },[]);

    useEffect(() => {
        setOriginalWords(words[0]);
        setTranslatedWords(words[1]);
    },[words]);


    let fetchData =(() => {
        if (choose.or_id!= null && choose.tr_id!= null && choose.or_id===choose.tr_id){
            /*const newCorrect = solvedCorrect;
            newCorrect.push(choose.or_id);
            setSolvedCorrect(newCorrect);*/
            setSolvedCorrect(solvedCorrect+1);
            setInactive(choose);
            setChoose({or_id: null, tr_id: null});
        }
        if (choose.or_id!= null && choose.tr_id!= null && choose.or_id!==choose.tr_id){
            //const newWrong = solvedWrong;
            //newWrong.push(choose.or_id);
            //setSolvedWrong(newWrong);


            setIsWrong({or_id: choose.or_id, tr_id: choose.tr_id});


            //setInactive(choose);
            setWrong(choose);
            setChoose({or_id: null, tr_id: null});
        }


    })
    const setWrong = (choose) => {
        const newOriginalWords = originalWords;
        newOriginalWords.map(word => {
            if (word.id === choose.or_id){
                word.isSelected = false;
            }
        })
        setOriginalWords(newOriginalWords);
        const newTranslatedWords = translatedWords;
        newTranslatedWords.map(word => {
            if (word.id === choose.tr_id){
                word.isSelected = false;
            }
        })
        setTranslatedWords(newTranslatedWords);
    }


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

    const handleClick = ((id, wordType: string) => {
        if (wordType === "original"){
            const newOriginalWords = originalWords;
            newOriginalWords.map(word => {
                if (word.id === choose.or_id) {
                    word.isSelected = false;
                }
                if (word.id === id){
                    word.isSelected = true;
                }
            })
            setOriginalWords(newOriginalWords);
            const newChoose = {...choose}
            newChoose.or_id = id
            setChoose(newChoose);
        } else if (wordType === "translated"){
            const newTranslatedWords = translatedWords;
            newTranslatedWords.map(word => {
                if (word.id === choose.tr_id) {
                    word.isSelected = false;
                }
                if (word.id === id){
                    word.isSelected = true;
                }
            })
            setTranslatedWords(newTranslatedWords);
            const newChoose = {...choose}
            newChoose.tr_id = id
            setChoose(newChoose);
        }
        fetchData();

    })
    useEffect(() => {
        fetchData();
    },[fetchData]);

    return (
        <>

            <h1>Hello World</h1>
            <div>
                <div>
                {originalWords && originalWords.map((value, index) => (
                    <div key={"or"+index}>
                    <Word
                    word={value.original_word}
                    choose={choose}
                    wordType="original"
                    setChoose={setChoose}
                    id={value.id}
                    isVisible={value.isVisible}
                    isSelected={value.isSelected}
                    fetchData={fetchData}
                    handleClick={handleClick}




                    isWrong={isWrong}
                    setIsWrong={setIsWrong}
                    />
                    </div>
                ))}
                </div>
                <div>
                    {translatedWords && translatedWords.map((value, index) => (
                        <div key={"tr"+index}>
                            <Word
                                word={value.translated_word}
                                choose={choose}
                                wordType="translated"
                                setChoose={setChoose}
                                id={value.id}
                                isVisible={value.isVisible}
                                isSelected={value.isSelected}
                                fetchData={fetchData}
                                handleClick={handleClick}




                                isWrong={isWrong}
                                setIsWrong={setIsWrong}
                            />
                        </div>
                    ))}

                </div>
        </div>
            {solvedCorrect === 4 && <button>Next task</button>}

        </>
    )
}

/*
<div
                            className={translated.isVisible ?  (translated.id === choose.tr_id ? styles.choose : '') : styles.invisible}
                            id={'orig_'+translated.id.toString()}
                            key={index}
                            onClick={translated.isVisible ? () => handleClick(translated.id, "translated") : null}
                        >
                            {translated.translated_word}
                        </div>
 */