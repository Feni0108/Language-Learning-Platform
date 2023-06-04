import React from "react";
import { useState, useEffect } from "react";
import prisma from "@/lib/prisma";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const storyline = await prisma.storyline.findMany();

  const randomId = Math.floor(Math.random() * storyline.length);

  const story = storyline[randomId];

  const options = story.options.split(";");
  const sentences = story.sentences.split(";");
  const solutions = story.solutions.split(";");

  return {
    props: {
      data: { sentences, options, solutions },
    },
  };
};

export default function Story(props: any) {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedSentences, setDisplayedSentences] = useState<string[]>([]);

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const [currentOptionsIndex, setCurrenOptionsIndex] = useState(0);
  const [currentOptions, setCurrenOptions] = useState<string[]>([]);

  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const sentences = props.data.sentences;
  const options: string[] = props.data.options;
  const solutions = props.data.solutions;

  useEffect(() => {
    if (currentSentenceIndex < sentences.length) {
      const timer = setTimeout(() => {
        setDisplayedSentences((prevSentence) => [
          ...prevSentence,
          sentences[currentSentenceIndex],
        ]);
        if (sentences[currentSentenceIndex].includes("__________")) {
          setShowOptions(true);
          const getOptions = options[currentOptionsIndex].split("_");
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
  }, [currentSentenceIndex]);

  useEffect(() => {
    const solution = solutions[currentSolutionIndex];

    if (selectedOption) {
      if (solution === selectedOption) {
        setSuccessMessage("That is correct!");
      } else {
        setErrorMessage("That is not right the right answer is: " + solution);
      }

      const updatedSentence = sentences[currentSentenceIndex].replace(
        "___________",
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
    <div>
      {displayedSentences.map((sentence, index) => (
        <div key={index}>{sentence}</div>
      ))}
      {showOptions && (
        <form onSubmit={handleOptionSubmit}>
          {currentOptions.map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                {option}
              </label>
            </div>
          ))}
        </form>
      )}
      <div className="mt-10">
        <p className="text-green-800 font-bold">{successMessage}</p>
        <p className="text-red-800 font-bold">{errorMessage}</p>
      </div>
    </div>
  );
}
