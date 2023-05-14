import {GetServerSideProps} from "next";
import prisma from "@/lib/prisma";
import {getWordWithPictures} from "@/components/getRandomPictures";
import {useState} from "react";

export const getServerSideProps: GetServerSideProps = async () => {
    const words = await prisma.dictionary.findMany();
    const fourWords = getWordWithPictures(words);
    return {
        props: {allWords: fourWords},
    }
}

export default function Picture({allWords}) {
    const [task, setTask] = useState(allWords);
    console.log(task);
}