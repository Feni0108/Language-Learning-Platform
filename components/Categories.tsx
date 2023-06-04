import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

const Greetings = ({progress, progressLimit, type}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (progress >= progressLimit){
            setIsVisible(true);
        }
    }, [progress])

    const handleClick = () => {
        router.push("http://localhost:3000/lessons")
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
            >Start Game</button>
        </div>
    );
};

export default Greetings;