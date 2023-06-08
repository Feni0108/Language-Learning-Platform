import { Word, Dictionary, Category, Sentence } from "@prisma/client";

/*
Usage:
- update the database schema: npx prisma migrate dev
- regenerate the Prisma client: npx prisma generate
- In the terminal navigate to the root directory of the project
- Run the following command: npx ts-node --compiler-options '{"module":"commonjs"}' db/seed.ts
*/

const prisma = require("../lib/prisma").default;

async function seed() {
  /*------- Seeding the Word table ------*/
  try {
    await prisma.$connect();
    const wordList: { english: string; hungarian: string }[] = [
      { english: "hello", hungarian: "szia" },
      { english: "goodbye", hungarian: "viszlát" },
      { english: "yes", hungarian: "igen" },
      { english: "no", hungarian: "nem" },
      { english: "thank you", hungarian: "köszönöm" },
      { english: "please", hungarian: "kérlek" },
      { english: "sorry", hungarian: "bocsánat" },
      { english: "excuse me", hungarian: "elnézést" },
      { english: "today", hungarian: "ma" },
      { english: "tomorrow", hungarian: "holnap" },
      { english: "yesterday", hungarian: "tegnap" },
      { english: "morning", hungarian: "reggel" },
      { english: "evening", hungarian: "este" },
      { english: "night", hungarian: "éjszaka" },
      { english: "week", hungarian: "hét" },
      { english: "month", hungarian: "hónap" },
      { english: "year", hungarian: "év" },
      { english: "day", hungarian: "nap" },
      { english: "hour", hungarian: "óra" },
      { english: "minute", hungarian: "perc" },
      { english: "second", hungarian: "másodperc" },
      { english: "money", hungarian: "pénz" },
      { english: "book", hungarian: "könyv" },
      { english: "school", hungarian: "iskola" },
      { english: "car", hungarian: "autó" },
      { english: "house", hungarian: "ház" },
      { english: "dog", hungarian: "kutya" },
      { english: "cat", hungarian: "macska" },
      { english: "tree", hungarian: "fa" },
      { english: "flower", hungarian: "virág" },
      { english: "river", hungarian: "folyó" },
      { english: "mountain", hungarian: "hegy" },
      { english: "sun", hungarian: "nap" },
      { english: "moon", hungarian: "hold" },
      { english: "star", hungarian: "csillag" },
      { english: "water", hungarian: "víz" },
      { english: "fire", hungarian: "tűz" },
      { english: "earth", hungarian: "föld" },
      { english: "air", hungarian: "levegő" },
      { english: "food", hungarian: "étel" },
      { english: "drink", hungarian: "ital" },
      { english: "friend", hungarian: "barát" },
      { english: "family", hungarian: "család" },
      { english: "love", hungarian: "szeretet" },
      { english: "pen", hungarian: "toll" },
      { english: "pencil", hungarian: "ceruza" },
      { english: "table", hungarian: "asztal" },
      { english: "chair", hungarian: "szék" },
      { english: "computer", hungarian: "számítógép" },
      { english: "phone", hungarian: "telefon" },
      { english: "music", hungarian: "zene" },
      { english: "art", hungarian: "művészet" },
      { english: "sport", hungarian: "sport" },
      { english: "work", hungarian: "munka" },
      { english: "study", hungarian: "tanulás" },
      { english: "play", hungarian: "játék" },
      { english: "sleep", hungarian: "alvás" },
      { english: "eat", hungarian: "enni" },
      { english: "drink", hungarian: "inni" },
      { english: "run", hungarian: "futni" },
      { english: "swim", hungarian: "úszni" },
      { english: "jump", hungarian: "ugrani" },
      { english: "laugh", hungarian: "nevetni" },
      { english: "cry", hungarian: "sírni" },
      { english: "happy", hungarian: "boldog" },
      { english: "sad", hungarian: "szomorú" },
      { english: "big", hungarian: "nagy" },
      { english: "small", hungarian: "kicsi" },
      { english: "good", hungarian: "jó" },
      { english: "bad", hungarian: "rossz" },
      { english: "hot", hungarian: "meleg" },
      { english: "cold", hungarian: "hideg" },
      { english: "new", hungarian: "új" },
      { english: "old", hungarian: "öreg" },
      { english: "beautiful", hungarian: "szép" },
      { english: "ugly", hungarian: "csúnya" },
      { english: "interesting", hungarian: "érdekes" },
      { english: "boring", hungarian: "unalmas" },
      { english: "easy", hungarian: "könnyű" },
      { english: "difficult", hungarian: "nehéz" },
      { english: "happy", hungarian: "boldog" },
      { english: "sad", hungarian: "szomorú" },
      { english: "fast", hungarian: "gyors" },
      { english: "slow", hungarian: "lassú" },
      { english: "near", hungarian: "közel" },
      { english: "far", hungarian: "távol" },
    ];

    const existingWords: Word[] = await prisma.word.findMany();

    // prevent copying the same word pairs to the database
    const newWords = wordList.filter((word) => {
      const exists = existingWords.some(
        (existingWord) =>
          existingWord.hungarian === word.hungarian &&
          existingWord.english === word.english
      );
      return !exists;
    });

    await prisma.word.createMany({ data: newWords });

    console.log("Database seeded successfully!");
    /*-------------------------------------------------------*/

    /*--------- Seeding the Dictionary table ---------*/

    const dictionaryList: {
      original_word: string;
      translated_word: string;
      category: string;
    }[] = [
      {
        original_word: "macska",
        translated_word: "cat",
        category: Category.ANIMALS,
      },
      {
        original_word: "kutya",
        translated_word: "dog",
        category: Category.ANIMALS,
      },
      {
        original_word: "malac",
        translated_word: "pig",
        category: Category.ANIMALS,
      },
      {
        original_word: "ló",
        translated_word: "horse",
        category: Category.ANIMALS,
      },
      {
        original_word: "mosómedve",
        translated_word: "racoon",
        category: Category.ANIMALS,
      },
      {
        original_word: "madár",
        translated_word: "bird",
        category: Category.ANIMALS,
      },
      {
        original_word: "denevér",
        translated_word: "bat",
        category: Category.ANIMALS,
      },
    ];

    const existingDictionary: Dictionary[] = await prisma.Dictionary.findMany();

    const newDictionary = dictionaryList.filter((dictionary) => {
      const exists = existingDictionary.some(
        (existingDictionary) =>
          existingDictionary.original_word === dictionary.original_word
      );
      return !exists;
    });

    await prisma.Dictionary.createMany({ data: newDictionary });

    /*--------------------------------------------------------------------------*/

    /*--------- Seeding the Sentence table ---------*/

    const sentenceList: {
      english_sentence: string;
      german_sentence: string;
    }[] = [
      {
        english_sentence: "How are you?",
        german_sentence: "Wie geht es dir?",
      },
      {
        english_sentence: "What is your name?",
        german_sentence: "Wie is dein Name?",
      },
      {
        english_sentence: "My name is Fanni",
        german_sentence: "Mein Name ist Fanni.",
      },
      {
        english_sentence: "Where are you from?",
        german_sentence: "Woher kommst du?",
      },
      {
        english_sentence: "I came from Hungary.",
        german_sentence: "Ich komme aus Ungarn.",
      },
      {
        english_sentence: "I am hungry.",
        german_sentence: "Ich habe hunger.",
      },
      {
        english_sentence: "I am afraid.",
        german_sentence: "Ich habe Angst.",
      },
    ];

    const existingSentences: Sentence[] = await prisma.Sentence.findMany();

    const newSentence = sentenceList.filter((sentence) => {
      const exists = existingSentences.some(
        (existingSentences) =>
          existingSentences.english_sentence === sentence.english_sentence
      );
      return !exists;
    });

    await prisma.Sentence.createMany({ data: newSentence });
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
