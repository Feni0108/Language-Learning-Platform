import { Language } from "@prisma/client";
import React, {useState} from "react";
import {Flag} from "../../db/blob";


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

    const flagFinder = () => {
        const flag = Flag.find(flag => flag.id === hover.interfaceLanguage+"-"+hover.targetLanguage)
        if (flag){
            return `data:image/jpeg;base64,${flag.image}`
        }
        return "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png"
    }

    return (
        <div>
            {isShown && <div>
                <p className="italic text-xs w-24 pt-2"
                >{"Progress: "+hover.progress}</p>

            </div>}
            {isShown ? (<div className="pt-2 pr-8 w-24"
                onClick={() => handleSaveSettingsFromShortcut(hover.interfaceLanguage, hover.targetLanguage)}
                             onMouseLeave={() => setIsShown(false)}>
                <img className="h-18 w-18 rounded-full" src={flagFinder()}/>
            </div>) : (<div className="pt-8 pr-8 w-24"
               onMouseEnter={() => setIsShown(true)}
                            onClick={() => handleSaveSettingsFromShortcut(hover.interfaceLanguage, hover.targetLanguage)}
               >
                <img className="h-18 w-18 rounded-full" src={flagFinder()}/>
            </div>)}

        </div>
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