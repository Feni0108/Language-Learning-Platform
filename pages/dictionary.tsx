import {getOptions} from "@/utils/getRandomWord";
import {useEffect, useState} from "react";
import {number} from "prop-types";


export default function Dictionary() {
    const [words, setWords] = useState([]);
    const [choose, setChoose] = useState({or_id:null,tr_id:null});
    const [count, setCount] = useState(0);
    const [isButton, setIsButton] = useState(false);


    useEffect(() => {
        setWords(getOptions())
    },[]);

    useEffect(() => {
        if (count === 4){
            setIsButton(true);
        }
    },[count])

    const handleClick = () => {
        //Todo: If Click one of the divs, first checks whether you were previously selected
        //Todo: If it was selected and the same: nothing happens
        //Todo: If it was selected and is not the same: switch to the other word
        //Todo: If it was selected and paired with another word, Tests whether the selection is good:
            //Todo: If it's good, then the count increment by one, and empty the choose
            //Todo: If it is wrong, it just empties the choose
        //Todo: Feedback on UI with CSS formatting
    }

    const [originalWords, translatedWords] = words;

    return (
        <>
            <h1>Hello World</h1>
            <div>
                <p>
                {originalWords && originalWords.map((value, index) => (
                    <div id={'orig_'+value.id.toString()} key={index}>
                        {value.original_word}
                    </div>
                ))}
                </p>
                <p>
                    {translatedWords && translatedWords.map((value, index) => (
                        <div id={'orig_'+value.id.toString()} key={index}>
                            {value.translated_word}
                        </div>
                    ))}
                </p>
        </div>
            {isButton && <button>Next task</button>}
        </>
    )
}

/*


 */