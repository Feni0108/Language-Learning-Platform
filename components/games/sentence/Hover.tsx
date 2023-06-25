import React, {useState} from "react";


type Props = {
    id:number
    word: string
    hover: string[]
    setHover: React.Dispatch<React.SetStateAction<string>>

}

const Hover = ({
    word,
    hover,
    setHover

              }: Props) => {
    const [isShown, setIsShown] = useState(false);

    return (
        <>
            <div className="inline-block">
        <p className="pl-2 pr-2 hover:text-xl"
            onMouseEnter={() => setHover(hover[0])}
            onMouseLeave={() => setHover("")}>
            {word}
        </p>

            </div>

        </>
    )

}


export default Hover;