import { Category, Contribution, Language } from ".prisma/client";
import { FormEventHandler, use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import prisma from "@/lib/prisma";
import { useSession } from "next-auth/react";
import { HiOutlineStar } from "react-icons/hi";
import ContributionList from "../components/contribution/contributionList";

export const LanguageToLabelMapping: Record<Language, string> = {
  [Language.cz]: "cz",
  [Language.eng]: "eng",
  [Language.hu]: "hu",
  [Language.is]: "is",
  [Language.sk]: "sk",
};

export const CategoryToLabelMapping: Record<Category, string> = {
  [Category.ANIMALS]: "animals",
  [Category.CALENDAR]: "calendar",
  [Category.FAMILY]: "family",
  [Category.FRIENDS]: "friends",
  [Category.GREETINGS]: "greetings",
  [Category.HOBBY]: "hobby",
  [Category.LIVING]: "living",
  [Category.SHOPPING]: "shopping",
};

interface Contributions {
  contributions: {
    id: number;
    word: string;
    language: string;
    description: string;
    category: string;
  }[];
}

const contributionIndex = ({ contributions }: Contributions) => {
  const { data: session, status, update } = useSession();
  const [newWord, setNewWord] = useState({
    word: "",
    language: "cz",
    description: "",
    category: "ANIMALS",
  });
  const router = useRouter();
  const endpointPost = "http://localhost:3000/api/createContribution";
  const [voted, setVoted] = useState<Boolean>();

  const vote = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      fetch(endpointPost, {
        body: JSON.stringify({
          word: newWord.word,
          language: newWord.language,
          description: newWord.description,
          category: newWord.category,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(() => {
        setNewWord({
          word: "",
          language: "cz",
          description: "",
          category: "ANIMALS",
        });
      });
      refreshData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {session && (
        <div className="flex min-h-full flex-col justify-center">
          <h2 className="mt-10 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Do you want to contribute with your own words?
          </h2>

          <div className="m-auto">
            <form className="" onSubmit={handleSubmit}>
              <div className="flex space-x-4 mb-6">
                <div className="flex space-x-2">
                  <label
                    htmlFor="word"
                    className="py-1.5 text-sm font-medium leading-6 text-gray-900"
                  >
                    Word:
                  </label>
                  <input
                    id="word"
                    name="word"
                    required
                    className="rounded-md border-0 py-1.5 
                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-5"
                    value={newWord.word}
                    onChange={({ target }) =>
                      setNewWord({ ...newWord, word: target.value })
                    }
                    type="text"
                  />
                </div>
                <div className="flex space-x-2">
                  <label
                    htmlFor="language"
                    className="py-1.5 text-sm font-medium leading-6 text-gray-900"
                  >
                    Language:
                  </label>
                  <select
                    placeholder="Select language"
                    value={newWord.language}
                    onChange={({ target }) =>
                      setNewWord({ ...newWord, language: target.value })
                    }
                  >
                    {Object.keys(LanguageToLabelMapping).map((language) => (
                      <option>{language}</option>
                    ))}
                  </select>
                </div>

                <div className="flex space-x-2">
                  <label
                    htmlFor="category"
                    className="py-1.5 text-sm font-medium leading-6 text-gray-900"
                  >
                    Category:
                  </label>
                  <div className="mt-2">
                    <select
                      placeholder="Select category"
                      value={newWord.category}
                      onChange={({ target }) =>
                        setNewWord({ ...newWord, category: target.value })
                      }
                    >
                      {Object.keys(CategoryToLabelMapping).map((category) => (
                        <option>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="description"
                  className="py-1.5 text-sm font-medium leading-6 text-gray-900"
                >
                  Provide description:
                </label>
                <div className="">
                  <input
                    id="description"
                    name="description"
                    className="block w-full rounded-md border-0 py-1.5 
                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-5"
                    value={newWord.description}
                    onChange={({ target }) =>
                      setNewWord({ ...newWord, description: target.value })
                    }
                    type="text"
                  />
                  <input
                    type="submit"
                    className="flex w-full justify-center rounded-md 
                bg-teal-200 px-3 py-1.5 text-sm font-semibold leading-6 
                text-grey-500 shadow-sm hover:bg-teal-400 hover:text-gray-100 mt-5"
                    value="Let's go!"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="w-auto min-w-[75%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
            <ul>
              {contributions.map((contribution) => (
                <li
                  key={contribution.id}
                  className="border-b border-gray-600 p-2"
                >
                  <div className="flex justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold">{contribution.word}</h3>
                      <p className="text-xs pt-2">{contribution.description}</p>
                    </div>
                    <div>
                      <p className="text-xs pt-2">
                        {contribution.language} / {contribution.category}
                      </p>
                    </div>
                    <div className="pl-2 pt-2 text-xl">
                      <HiOutlineStar />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default contributionIndex;

export const getServerSideProps: GetServerSideProps = async () => {
  const contributions = await prisma.contribution.findMany({
    select: {
      id: true,
      word: true,
      language: true,
      description: true,
      category: true,
    },
  });

  return {
    props: {
      contributions,
    },
  };
};
