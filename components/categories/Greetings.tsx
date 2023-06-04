import React, {useEffect, useState} from "react";

const Greetings = ({progress}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (progress >= 0){
            setIsVisible(true);
        }
    }, [progress])

    return (
        <div >
            <button
                className={isVisible ? "text-green-600 bg-lime-600" : "line-through text-grey-200"}
            >Start Game</button>
        </div>
    );
};

export default Greetings;