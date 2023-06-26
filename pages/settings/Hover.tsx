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
                <img className="h-12 w-12 rounded-full" src={"https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png"}/>
            </div>) : (<div className="pt-6"
               onMouseEnter={() => setIsShown(true)}
                            onClick={() => handleSaveSettingsFromShortcut(hover.interfaceLanguage, hover.targetLanguage)}
               >
                <img className="h-12 w-12 rounded-full" src={"https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png"}/>
            </div>)}

        </>
    )

}
/*
* <img
                                          className="h-12 w-12 rounded-full"
                                          src={
                                            session.user?.image
                                                ? session.user?.image
                                                : "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png"
                                          }
                                          alt=""
                                      />
* */

export default Hover;