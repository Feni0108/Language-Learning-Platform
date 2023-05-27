import React from "react"
import { useState, useEffect } from 'react';
import prisma from "@/lib/prisma";
import { GetServerSideProps } from "next";

const getData = (storyline: any) => {
    const getSentences = storyline[0].sentences.split(";");
    const getWords = storyline[0].words.split(";");

    const sentences: any[] = [];
    for (let i = 0; i < getSentences.length; i++ ){
        sentences.push(getSentences[i]);
    }

    const words = [];
    for (let i = 0; i < getWords.length; i++ ){
        words.push(getWords[i]);
    }

    return {sentences, words};
}



export const getServerSideProps: GetServerSideProps = async () => {
    const storyline = await prisma.storyline.findMany();
    const data = getData(storyline)
    return {
        props: {
            data: data,
        }
    }
}

export default function Story(props: any) {
    const [currentSentence, setCurrentSentence] = useState(0);
    const [displayedSentence, setDisplayedSentence] = useState<string[]>([]);


    const sentences = props.data.sentences;
    console.log(sentences)
    

    useEffect(() => {
        if (currentSentence < sentences.length) {
            const timer = setTimeout(() => {
                setDisplayedSentence(prevSentence => [...prevSentence, sentences[currentSentence]]);
                setCurrentSentence(prevIndex => prevIndex + 1);
            }, 2000);
            
            return () => clearTimeout(timer);
        }
    }, [currentSentence]);

    return (
        <div>
            {displayedSentence.map((sentence, index) => (
                <div key={index}>{sentence}</div>
            ))}
        </div>
    )
}