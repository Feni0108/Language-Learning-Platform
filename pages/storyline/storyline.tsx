import React from "react"
import { useState, useEffect } from 'react';

const sentences = [
    'Hello',
    'My name is Gudda',
    'What is your name?'
];

export default function Story() {
    const [currentSentence, setCurrentSentence] = useState(0);
    const [displayedSentence, setDisplayedSentence] = useState<string[]>([]);

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