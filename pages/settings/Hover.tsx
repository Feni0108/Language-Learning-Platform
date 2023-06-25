import { Language } from "@prisma/client";
import React, {useState} from "react";


type Props = {
    hover: {
        interfaceLanguage: Language,
        targetLanguage: Language,
        progress: number
    }

}

const Hover = ({
                   hover

               }: Props) => {
    const [isShown, setIsShown] = useState(false);

    return (
        <>
            {isShown && <div>
                <p>{"Interface language: "+hover.interfaceLanguage+" Target Language: "+hover.targetLanguage+" Progress: "+hover.progress}</p>

            </div>}
            {isShown ? (<div
                             onMouseLeave={() => setIsShown(false)}>
                {hover.interfaceLanguage+"-"+hover.targetLanguage+"-icons"}
            </div>) : (<div className="pt-6"
               onMouseEnter={() => setIsShown(true)}
               >
                {hover.interfaceLanguage+"-"+hover.targetLanguage+"-icons"}
            </div>)}

        </>
    )

}


export default Hover;