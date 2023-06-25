import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

type CategoriesProps = {
    progress: number;
    progressLimit: number;
    type: string;
}

const Categories = ({progress, progressLimit, type} : CategoriesProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const [isProgressUpdate, setIsProgressUpdate] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (progress >= progressLimit){
            setIsVisible(true);
        }
        if (Math.trunc(progress/5) === Math.trunc(progressLimit/5)){
            setIsProgressUpdate(true);
        }
    }, [progress])

    const handleClick = () => {
        router.push({pathname:"/lessons", query: {type: type, isProgressUpdate: isProgressUpdate}}, '/lessons')
    }



    return (
        <div >
            {isShown && <div>
                {type}
            </div>}
            {!isShown && <br/>}
            <button
                className={isVisible ? "text-green-600" : "line-through text-grey-200"}
                onClick={isVisible? () => handleClick() : undefined}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >{type}-icon</button>
        </div>
    );
};

export default Categories;