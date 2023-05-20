import React, {useEffect, useState} from "react";


type Props = {
    word: string

}

const Hover = ({
    word


              }: Props) => {
    const [isShown, setIsShown] = useState(false);
    console.log("In the hower");
    console.log(word);


    return (
        <>
        <p
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            {word}
        </p>
    {isShown && <div>
        I'm a hover function!
    </div>}
        </>
    )

}


export default Hover;