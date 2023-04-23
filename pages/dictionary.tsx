import {getOptions} from "@/utils/getRandomWord";
import {useEffect, useState} from "react";


export default function Dictionary() {
    const [words, updateWords] = useState([]);

    useEffect(() => {
        updateWords(getOptions())
    },[])

    const [originalWords, translatedWords] = words;

    console.log(originalWords);
    console.log(translatedWords);

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
        </>
    )
}

/*


 */