import { Dictionary } from "@/components/games/gameComponentBackend/getRandomPictures";

let originalWord: {
  id: number;
  original_word: string;
  isVisible: boolean;
  isSelected: boolean;
}[] = [];
let translatedWord: {
  id: number;
  translated_word: string;
  isVisible: boolean;
  isSelected: boolean;
}[] = [];

const getRandomWord = (allWords: Dictionary, maxId: number) => {
  const randomId = Math.floor(Math.random() * maxId) + 1;
  let newId = true;
  for (let i: number = 0; i < originalWord.length; i++) {
    if (
      originalWord[i].id === allWords[randomId - 1].id ||
      originalWord[i].original_word === allWords[randomId - 1].original_word ||
      translatedWord[i].translated_word ===
        allWords[randomId - 1].translated_word
    )
      newId = false;
  }
  if (newId) {
    originalWord.push({
      id: allWords[randomId - 1].id,
      original_word: allWords[randomId - 1].original_word,
      isVisible: true,
      isSelected: false,
    });
    translatedWord.push({
      id: allWords[randomId - 1].id,
      translated_word: allWords[randomId - 1].translated_word,
      isVisible: true,
      isSelected: false,
    });
  }
};

//Main function for retrieving the necessary variables
export const getOptions = (allWords: Dictionary) => {
  originalWord = [];
  translatedWord = [];
  const maxId = allWords.length;
  do {
    getRandomWord(allWords, maxId);
  } while (originalWord.length !== 4);
  return [originalWord, getRandom(translatedWord)];
};

//Mixes the given array
const getRandom = (
  translatedWord: { id: number; translated_word: string }[]
) => {
  for (let i = translatedWord.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = translatedWord[i];
    translatedWord[i] = translatedWord[j];
    translatedWord[j] = temp;
  }
  return translatedWord;
};
