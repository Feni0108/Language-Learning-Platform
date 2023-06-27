import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import i18n from "@/i18n/i18n";

type CategoriesProps = {
    progress: number;
    progressLimit: number;
    type: string;
    displayType: string;
}

const Categories = ({progress, progressLimit, type, displayType} : CategoriesProps) => {
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
            {isShown && <div>
                {displayType}
            </div>}
            {!isShown && <br/>}
            <button
                className={isVisible ? "text-green-600" : "line-through text-grey-200"}
                onClick={isVisible? () => handleClick() : undefined}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
<<<<<<< HEAD:components/ChildComponent/Categories.tsx
            >{t(type)}-icon</button>
=======
            >{displayType}-icon</button>
>>>>>>> 0a8c0b8f5995e4af6d91336faf0d48b53c2f7865:components/Categories.tsx
        </div>
    );
};

export default Categories;