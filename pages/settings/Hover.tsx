import { Language } from "@prisma/client";
import React, {useState} from "react";
import {
    MouseEventHandler
} from "../../../../../../../../Program Files/JetBrains/IntelliJ IDEA 2022.3.1/plugins/javascript-impl/jsLanguageServicesImpl/external/react";


type Props = {
    hover: {
        interfaceLanguage: Language,
        targetLanguage: Language,
        progress: number
    },
    handleSaveSettingsFromShortcut: (interfaceLanguage: Language, targetLanguage: Language) => void;

}

const Hover = ({
                   hover,
                   handleSaveSettingsFromShortcut

               }: Props) => {
    const [isShown, setIsShown] = useState(false);

    return (
        <>
            {isShown && <div>
                <p>{"Interface language: "+hover.interfaceLanguage+" Target Language: "+hover.targetLanguage+" Progress: "+hover.progress}</p>

            </div>}
            {isShown ? (<div
                onClick={() => handleSaveSettingsFromShortcut(hover.interfaceLanguage, hover.targetLanguage)}
                             onMouseLeave={() => setIsShown(false)}>
                {hover.interfaceLanguage+"-"+hover.targetLanguage+"-icons"}
            </div>) : (<div className="pt-6"
               onMouseEnter={() => setIsShown(true)}
                            onClick={() => handleSaveSettingsFromShortcut(hover.interfaceLanguage, hover.targetLanguage)}
               >
                {hover.interfaceLanguage+"-"+hover.targetLanguage+"-icons"}
            </div>)}

        </>
    )

}


export default Hover;