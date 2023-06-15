import React, {useState} from "react";


type Props = {
    id:number
    word: string
    hover: string[]

}

const Hover = ({
    word,
    hover

              }: Props) => {
    const [isShown, setIsShown] = useState(false);

    return (
        <>
        <p style={{display: "inline-block", margin:5}}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            {word}
        </p>
    {isShown && <div>
        {hover.map((value) => (
            <p>
                {value}
            </p>
        ))}
    </div>}
        </>
    )

}


export default Hover;