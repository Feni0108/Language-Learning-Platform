
const words: {id: number, word: string}[] = [];
const solutionOrder: number[] = [];
let sentence: string = "";


export const getRandomSentence = (sentences) => {
    const MAX_ID = sentences.length;
    createData(sentences, MAX_ID);
    return {words:words, solutionOrder:solutionOrder, original:sentence};
}
const createData = (sentences, MAX_ID) => {
    const randomId = (Math.floor(Math.random() * (MAX_ID)));
    const randomTranslate = (Math.floor(Math.random() * 2));
    if (randomTranslate === 0){
        const preWords = sentences[randomId].german_sentence.split(" ");
        splitSentence(preWords);
        sentence = sentences[randomId].english_sentence;
    } else {
        const preWords = sentences[randomId].english_sentence.split(" ");
        splitSentence(preWords);
        sentence = sentences[randomId].german_sentence;
    }
}

const splitSentence = (preWords) => {
    const randomWords = (Math.floor(Math.random() * (10 - preWords.length) + preWords.length));
    for (let i = 0; i<preWords.length; i++ ){
        words.push({id:(i+1), word: preWords[i]});
        solutionOrder.push(i+1);
    }
    do {
        words.push({id:words.length+1, word: "dummy word"})
    } while (words.length < randomWords);
}