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

const getRandomWord = (original_word: Dictionary, translated_word: Dictionary, maxId: number) => {
  const randomId = Math.floor(Math.random() * maxId) + 1;
  let newId = true;
  for (let i: number = 0; i < originalWord.length; i++) {
    if (
      originalWord[i].id === original_word[randomId - 1].id ||
      originalWord[i].original_word === original_word[randomId - 1].word ||
      translatedWord[i].translated_word ===
        translated_word[randomId - 1].word
    )
      newId = false;
  }
  if (newId) {
    originalWord.push({
      id: original_word[randomId - 1].id,
      original_word: original_word[randomId - 1].word,
      isVisible: true,
      isSelected: false,
    });
    translatedWord.push({
      id: translated_word[randomId - 1].id,
      translated_word: translated_word[randomId - 1].word,
      isVisible: true,
      isSelected: false,
    });
  }
};

//Main function for retrieving the necessary variables
export const getOptions = (original_word: Dictionary, translated_word: Dictionary) => {
  originalWord = [];
  translatedWord = [];
  const maxId = original_word.length;
  do {
    getRandomWord(original_word, translated_word, maxId);
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
