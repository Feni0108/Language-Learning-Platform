import {Category, Contribution, Language} from ".prisma/client";
import {FormEventHandler, useState, useEffect} from "react";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import prisma from "@/lib/prisma";
import {getSession, useSession} from "next-auth/react";
import {HiOutlineStar, HiStar} from "react-icons/hi";
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";
import {MdKeyboardDoubleArrowUp} from "react-icons/md";
import {getLanguageCode} from "@/components/getLanguageCode";
import i18n from "@/i18n/i18n";
import {getCategoryLabel} from "@/components/getCategoryLabel";


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
  [Category.NUMBER]: "number",
};

interface Contributions {
  finalContributions: {
    id: number;
    word: string;
    language: string;
    description: string;
    category: string;
    vote: number;
    isVoted: boolean;
  }[];
}

interface UserSettings {
  interfaceLanguage: string;
  targetLanguage: string;
  learningGoal: string;
  userId: string;
}

interface SettingsProps {
  userSettings: UserSettings | null;
}

const contributionIndex = ({finalContributions}: Contributions, {userSettings}: SettingsProps) => {

  const [interfaceLanguage, setInterfaceLanguage] = useState<string>(userSettings?.interfaceLanguage || '');
  const t = (key: string) => i18n.t(key);
  useEffect(() => {
    if (interfaceLanguage) {
      const languageCode = getLanguageCode(interfaceLanguage);
      i18n.changeLanguage(languageCode);
    }
  }, [interfaceLanguage]);

  const {data: session} = useSession();
  const [newWord, setNewWord] = useState({
    word: "",
    language: "cz",
    description: "",
    category: "ANIMALS",
  });
  const router = useRouter();
  const endpointForCreatingNewContribution =
      "/api/contribution/createContribution";
  const endpointForVoting = "/api/contribution/voteUp";
  const endpointForVotingDown = "/api/contribution/voteDown";
  const endpointForDeletingRelation =
      "/api/contribution/deleteContributionUserConnection";

  const [beforeIndex = 0, setBeforeIndex] = useState<number>();
  const firstPage = 0;
  const limit: number = 5;

  const loadAfter = () => {
    if (beforeIndex + limit < finalContributions.length) {
      setBeforeIndex(beforeIndex + limit);
    }
    console.log(beforeIndex);
    refreshData();
  };

  const loadBefore = () => {
    if (beforeIndex - limit >= 0) {
      setBeforeIndex(beforeIndex - limit);
    }
    console.log(beforeIndex);
    refreshData();
  };

  const loadFirst = () => {
    setBeforeIndex(0);
    refreshData();
  };

  const deleteVote = async (contributionId: number) => {

    try {
      fetch(endpointForVotingDown, {
        body: JSON.stringify({
          contributionId: contributionId,
          userId: session?.user!.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
      .then(() => {
        fetch(endpointForDeletingRelation, {
          body: JSON.stringify({
            contributionId: contributionId,
            userId: session?.user!.id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
      })
      .then(() => {
        refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const vote = async (contribtionId: number) => {

    try {
      fetch(endpointForVoting, {
        body: JSON.stringify({
          contributionId: contribtionId,
          userId: session?.user!.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(() => {
        refreshData();
      });
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
      fetch(endpointForCreatingNewContribution, {
        body: JSON.stringify({
          word: newWord.word,
          language: newWord.language,
          description: newWord.description,
          category: newWord.category,
          userId: session?.user!.id,
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
        refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <>
        {session && (
            <div className="flex min-h-full flex-col justify-center">
              <h2 className="mt-10 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {t('Do_you_want_to_contribute_with_your_own_words')}?
              </h2>

              <div className="m-auto">
                <form className="" onSubmit={handleSubmit}>
                  <div className="flex space-x-4 mb-6">
                    <div className="flex space-x-2">
                      <label
                          htmlFor="word"
                          className="py-1.5 text-sm font-medium leading-6 text-gray-900"
                      >
                        {t('Word')}:
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
                          onChange={({target}) =>
                              setNewWord({...newWord, word: target.value})
                          }
                          type="text"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <label
                          htmlFor="language"
                          className="py-1.5 text-sm font-medium leading-6 text-gray-900"
                      >
                        {t('Language')}:
                      </label>
                      <select
                          placeholder="Select language"
                          value={newWord.language}
                          onChange={({target}) =>
                              setNewWord({...newWord, language: target.value})
                          }
                      >
                        {Object.keys(LanguageToLabelMapping).map((language) => (
                            <option>{t(language)}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex space-x-2">
                      <label
                          htmlFor="category"
                          className="py-1.5 text-sm font-medium leading-6 text-gray-900"
                      >
                        {t('Category')}:
                      </label>
                      <div className="mt-2">
                        <select
                            placeholder="Select category"
                            value={newWord.category}
                            onChange={({target}) =>
                                setNewWord({...newWord, category: target.value})
                            }
                        >
                          {Object.values(Category).map((category) => (
                              <option value={category} key={category}>
                                {getCategoryLabel(category)}
                              </option>
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
                      {t('Provide_description')}:
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
                          onChange={({target}) =>
                              setNewWord({...newWord, description: target.value})
                          }
                          type="text"
                      />
                      <input
                          type="submit"
                          className="flex w-full justify-center rounded-md
                bg-teal-200 px-3 py-1.5 text-sm font-semibold leading-6 
                text-grey-500 shadow-sm hover:bg-teal-400 hover:text-gray-100 mt-5"
                          value={t('Lets_go')}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div
                  className="w-auto min-w-[75%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
                <ul>
                  {finalContributions
                  .slice(beforeIndex, beforeIndex + limit)
                  .map((contribution) => (
                      <li
                          key={contribution.id}
                          className="border-b border-gray-600 p-2"
                      >
                        <div className="flex justify-between">
                          <div className="flex-1">
                            <h3 className="font-bold">{contribution.word}</h3>
                            <p className="text-xs pt-2">
                              {contribution.description}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs pt-2">
                              {contribution.language} /{" "}
                              {contribution.category.toLowerCase()}
                            </p>
                          </div>
                          <div>
                            <div>
                              {!contribution.isVoted && (
                                  <div className="pl-2 pt-2 text-xl">
                                    <HiOutlineStar
                                        onClick={() => vote(contribution.id)}
                                    />
                                  </div>
                              )}
                              {contribution.isVoted && (
                                  <div className="pl-2 pt-2 text-xl">
                                    <HiStar
                                        onClick={() => deleteVote(contribution.id)}
                                    />
                                  </div>
                              )}
                            </div>
                            <div className="p-3 text-xs m-auto">
                              {contribution.vote}
                            </div>
                          </div>
                        </div>
                      </li>
                  ))}
                </ul>
                <div className="flex flex-inline justify-center p-10">
                  <RiArrowLeftSLine onClick={() => loadBefore()}/>
                  <RiArrowRightSLine onClick={() => loadAfter()}/>
                  <MdKeyboardDoubleArrowUp onClick={() => loadFirst()}/>
                </div>
              </div>
            </div>
        )}
      </>
  );
};

export default contributionIndex;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let session = await getSession(context);
  const contributions = await prisma.contribution.findMany({
    select: {
      id: true,
      word: true,
      language: true,
      description: true,
      category: true,
      votes: true,
    },

  });

  const finalContributions = contributions.map((contribute) => {
    if (
        contribute.votes.find((Element) => Element.userId === session?.user!.id)
    ) {
      return {
        id: contribute.id,
        word: contribute.word,
        language: contribute.language,
        description: contribute.description,
        category: contribute.category,
        vote: contribute.votes.length,
        isVoted: true,
      };
    } else {
      return {
        id: contribute.id,
        word: contribute.word,
        language: contribute.language,
        description: contribute.description,
        category: contribute.category,
        vote: contribute.votes.length,
        isVoted: false,
      };
    }
  });

  return {
    props: {
      finalContributions,
    },
  };
};
