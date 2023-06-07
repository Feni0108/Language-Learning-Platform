import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";


const Greetings = ({progress, progressLimit, type}) => {
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
        router.push({pathname:"http://localhost:3000/lessons", query: {type: type, isProgressUpdate: isProgressUpdate}}, 'http://localhost:3000/lessons')
    }


    return (
        <div >
            {isShown && <div>
                {type}
            </div>}
            {!isShown && <br/>}
            <button
                className={isVisible ? "text-green-600" : "line-through text-grey-200"}
                onClick={isVisible? () => handleClick() : null}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >{type}-icon</button>
        </div>
    );
};

export default Greetings;