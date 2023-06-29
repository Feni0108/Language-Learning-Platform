import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import i18n from "@/i18n/i18n";


type CategoriesProps = {
    progress: number;
    progressLimit: number;
    type: string;
    displayType: string;
    icon: JSX.Element;
}

const Categories = ({progress, progressLimit, type, displayType, icon} : CategoriesProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const [isProgressUpdate, setIsProgressUpdate] = useState(false);
    const router = useRouter();
    const t = (key: string) => i18n.t(key);

    useEffect(() => {
        if (progress >= progressLimit){
            setIsVisible(true);
        }
        if (Math.trunc(progress/5) === Math.trunc(progressLimit/5)){
            setIsProgressUpdate(true);
        }
    }, [progress])

    const handleClick = () => {
        router.push({pathname:"/lessons/"+type.toLowerCase(), query: {type: type, isProgressUpdate: isProgressUpdate}}, '/lessons/'+type.toLowerCase())
    }



    return (
        <div >
            {isShown && <div className="italic text-center">
                {displayType}
            </div>}
            {!isShown && <br/>}
            <button
                className={isVisible? "text-5xl text-white h-18 bg-green-400 w-18 rounded-full border-2 p-3 shadow-md shadow-green-400/40" : "text-white text-5xl bg-green-400 grayscale line-through text-grey-200 h-18 w-18 rounded-full border-2 p-3 shadow-md shadow-green-400/40"}
                onClick={isVisible? () => handleClick() : undefined}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                {icon}
            </button>

        </div>
    );
};

export default Categories;