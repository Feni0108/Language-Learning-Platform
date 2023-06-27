import React from "react";
import { useState, useEffect } from "react";



export type SentenceStoryLine = {
  options: string[][],
  sentences: string[],
  solutions: string[]
}
type StoryProps = {
  data: SentenceStoryLine;
  isSolved: boolean;
  setIsSolved: (isSolved: boolean) => void;
  isGood: boolean;
  setIsGood: (isGood: boolean) => void;
  handleSolved: () => void;
}


export default function Story({data, isSolved, setIsSolved, setIsGood, handleSolved}: StoryProps) {

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedSentences, setDisplayedSentences] = useState<string[]>([]);

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const [currentOptionsIndex, setCurrenOptionsIndex] = useState(0);
  const [currentOptions, setCurrenOptions] = useState<string[]>([]);

  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const sentences = data.sentences;
  const options: string[][] = data.options;
  const solutions = data.solutions;


  useEffect(() => {
    if (currentSentenceIndex < sentences.length) {
      const timer = setTimeout(() => {
        setDisplayedSentences((prevSentence) => [
          ...prevSentence,
          sentences[currentSentenceIndex],
        ]);
        if (sentences[currentSentenceIndex].includes("__")) {
          setShowOptions(true);
          const getOptions = options[currentOptionsIndex];
          setCurrenOptions(getOptions);
          setCurrenOptionsIndex((prevIndex) => prevIndex + 1);
        } else {
          setErrorMessage("");
          setSuccessMessage("");
          setCurrentSentenceIndex((prevIndex) => prevIndex + 1);
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
    if(currentSentenceIndex === sentences.length){
      setIsSolved(true);
    }
  }, [currentSentenceIndex]);

  useEffect(() => {
    const solution = solutions[currentSolutionIndex];

    if (selectedOption) {
      if (solution === selectedOption) {
        setSuccessMessage("That is correct!");
      } else {
        setErrorMessage("That is not right the right answer is: " + solution);
        setIsGood(false);
      }

      const updatedSentence = sentences[currentSentenceIndex].replace(
        "__",
        solution
      );
      setDisplayedSentences((prevSentences) => {
        const updatedSentences = [...prevSentences];
        updatedSentences.pop(); // Remove the sentence with "___"
        return [...updatedSentences, updatedSentence];
      });
      setShowOptions(false);
      setSelectedOption("");
      setCurrentSolutionIndex((prevIndex) => prevIndex + 1);
      setCurrentSentenceIndex((prevIndex) => prevIndex + 1);
    }
  }, [selectedOption]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="grid justify-items-center">
      <div className="w-96">
      {displayedSentences.map((sentence, index) => (
          <div>
            {index%2==0 ? (
                <div>
                  <div className="p-5 mt-5 w-64 mr-40 flex justify-start rounded rounded-full border-2" key={index}>
                    {sentence}
                  </div>
                </div>) :
                (<div>
                  <div className="p-5 mt-5 ml-40 w-64 m-2 italic flex justify-end rounded rounded-full border-2" key={index}>{sentence}</div></div>)}
          </div>)
          )
          }
      </div>
      {showOptions && (
        <form onSubmit={handleOptionSubmit}>
          <div className="mt-10 p-5">
          {currentOptions.map((option, index) => (
            <div key={index}>
              <label>
                <input className="m-4"
                  type="checkbox"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                {option}
              </label>
            </div>
          ))}
          </div>
        </form>
      )}
      <div className="mt-10">
        <p className="text-green-800 font-bold">{successMessage}</p>
        <p className="text-red-800 font-bold">{errorMessage}</p>
      </div>

      {isSolved && <div
          className="m-10 grid justify-items-center"
      >
        <button className="p-5 text-center w-56 rounded md:rounded-full border-2 hover:border-4"
            onClick={() => handleSolved()}
        >Continue</button>
      </div>}
    </div>
  );
}
