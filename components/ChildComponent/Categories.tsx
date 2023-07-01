import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import i18n from "@/i18n/i18n";
import {CircularProgress, Stack } from "@mui/material";


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

    const progressCalculator = () => {
        if ((progress-progressLimit)/5 >= 1){
            return 100;} else if (progress-progressLimit >= 0){
            return ((progress-progressLimit)/5)*100
        } return 0
    }

    return (
        <div >
            {isShown && <div className="italic text-center pb-2">
                {displayType}
            </div>}
            {!isShown && <br/>}
            {isShown? <Stack spacing={2} direction="row" >
                <CircularProgress size={92} sx={{marginLeft: 1, marginTop: -1}} variant="determinate" value={progressCalculator()} />
                <button
                className={isVisible? " absolute text-5xl text-white h-18 bg-green-400 w-18 rounded-full border-2 p-3 shadow-md shadow-green-400/40" : "absolute text-white text-5xl bg-green-400 grayscale line-through text-grey-200 h-18 w-18 rounded-full border-2 p-3 shadow-md shadow-green-400/40"}
                onClick={isVisible? () => handleClick() : undefined}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                {icon}
            </button>
            </Stack> : <Stack spacing={2} direction="row" sx={{paddingTop: 1}} >
                <CircularProgress size={92} sx={{marginLeft: 1, marginTop: -1}} variant="determinate" value={progressCalculator()} />
                <button
                className={isVisible? " absolute text-5xl text-white h-18 bg-green-400 w-18 rounded-full border-2 p-3 shadow-md shadow-green-400/40" : "absolute text-white text-5xl bg-green-400 grayscale line-through text-grey-200 h-18 w-18 rounded-full border-2 p-3 shadow-md shadow-green-400/40"}
                onClick={isVisible? () => handleClick() : undefined}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                >
            {icon}
                </button>
                </Stack>}
        </div>
    );
};

export default Categories;