import React from "react"
import { useState, useEffect } from 'react';
import prisma from "@/lib/prisma";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
    const storyline = await prisma.storyline.findMany();
    const sentences = storyline[0].sentences.split(";");
    const words = storyline[0].words.split(";");
    return {
        props: {
            data: {sentences, words},
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