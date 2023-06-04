import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

const Greetings = ({progress}) => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (progress >= 5){
            setIsVisible(true);
        }
    }, [progress])

    const handleClick = () => {
        router.push("http://localhost:3000/lessons")
    }

    return (
        <div >
            <button
                className={isVisible ? "text-green-600 " : "line-through text-grey-200"}
                onClick={isVisible? () => handleClick() : null}
            >Start Game</button>
        </div>
    );
};

export default Greetings;