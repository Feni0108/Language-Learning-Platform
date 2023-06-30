import {useSession} from "next-auth/react";
import AccessDenied from "@/components/ChildComponent/AccessDenied";
import SignUpButton from "@/components/ChildComponent/SignUpButton";
import React, {useEffect, useState} from "react";
import prisma from "@/lib/prisma";
import {GetServerSideProps} from "next";
import {FaUserGraduate} from "react-icons/fa";
import SignOutButton from "@/components/ChildComponent/SignOutButton";
import {number} from "prop-types";
import i18n from "@/i18n/i18n";
import {getLanguageCode} from "@/components/getLanguageCode";
import { AiTwotoneFire } from "react-icons/ai";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

interface UserSettings {
  interfaceLanguage: string;
  targetLanguage: string;
  learningGoal: string;
  userId: string;
}

interface SettingsProps {
  userSettings: UserSettings | null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const leaderBoard = await prisma.leaderboard.findMany({
    include: {
      user: {
        select: {
          username: true,
          name: true,
          image: true
        }
      }
    }
  });
  return {
    props: {leaderBoard: leaderBoard},
  }
}

type LeaderBoardType = { leaderBoard: LeaderBoardUser[]};

type LeaderBoardUser = {
    id: number,
    userId: string,
    totalPoints: number,
    strike: number,
    user: {
        username: string | null,
        name: string | null
        image: string | null
    }
}

export default function Leaderboard({leaderBoard} : LeaderBoardType, {userSettings}: SettingsProps) {
    const {data: session} = useSession();
    const [isPoint, setIsPoint] = useState<boolean>(true);
    const [sortLeaderBoard, setSortLeaderBoard] = useState<LeaderBoardUser[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const firstPage = 0;
    const limit: number = 5;
    const [beforeIndex = 0, setBeforeIndex] = useState<number>();

    const t = (key: string) => i18n.t(key);
    const [interfaceLanguage, setInterfaceLanguage] = useState<string>(userSettings?.interfaceLanguage || '');

    useEffect(() => {
      if (interfaceLanguage) {
        const languageCode = getLanguageCode(interfaceLanguage);
        i18n.changeLanguage(languageCode);
      }
    }, [interfaceLanguage]);

    useEffect(() => {
        async function setNewLeaderBoard() {
            if (isPoint) {
                setSortLeaderBoard(leaderBoard.sort(function (a:LeaderBoardUser, b:LeaderBoardUser) {
                    return a.totalPoints - b.totalPoints
                }).reverse());
            } else {
                setSortLeaderBoard(leaderBoard.sort(function (a:LeaderBoardUser, b: LeaderBoardUser) {
                    return a.strike - b.strike
                }).reverse());
            }
            if(sortLeaderBoard && session) {
                const position = sortLeaderBoard.indexOf(sortLeaderBoard.find(element => element.userId === session!.user!.id)!) + 1;
                setBeforeIndex(Math.trunc(position / 5) * 5);
            }
        }
        setNewLeaderBoard().then(
            (res) => {
                setIsLoading(false);
            }
        )
    }, [isPoint])
    useEffect(() => {
        async function setNewLeaderBoard() {
            if (isPoint) {
                setSortLeaderBoard(leaderBoard.sort(function (a:LeaderBoardUser, b:LeaderBoardUser) {
                    return a.totalPoints - b.totalPoints
                }).reverse());
            } else {
                setSortLeaderBoard(leaderBoard.sort(function (a:LeaderBoardUser, b: LeaderBoardUser) {
                    return a.strike - b.strike
                }).reverse());
            }
        }
        setNewLeaderBoard().then(
            (res) => {
                setIsLoading(false);
            }
        )
    },[leaderBoard])

    useEffect(() => {
            if(sortLeaderBoard && session) {
                const position = sortLeaderBoard.indexOf(sortLeaderBoard.find(element => element.userId === session!.user!.id)!) + 1;
                setBeforeIndex(Math.trunc(position / 5) * 5);
            }
    },[sortLeaderBoard,session]);



    const loadAfter = () => {
        if (beforeIndex + limit < leaderBoard.length) {
            setBeforeIndex(beforeIndex + limit);
        }
    };

    const loadBefore = () => {
        if (beforeIndex - limit >= 0) {
            setBeforeIndex(beforeIndex - limit);
        }
    };

    const loadFirst = () => {
        setBeforeIndex(0);
    };

    if (!session) {
        return <div>Please log in to access this page.
            <SignUpButton/>
        </div>;
    }

  return (
      <div>
        {!session && (
            <>
              <AccessDenied/>
              <SignUpButton/>
            </>
        )}
        {!isLoading && session && (
            <>
              <div className=" grid justify-center text-gray-700 p-8">
                  <div className="p-8 flex justify-around">
                <button
                    className={isPoint? "text-3xl text-white h-18 bg-cyan-400 w-18 rounded-full border-2 p-4 shadow-lg shadow-cyan-400/40" : "text-3xl text-white h-18 bg-cyan-400 w-18 rounded-full border-2 p-4 shadow-lg shadow-cyan-400/40 grayscale"}
                    onClick={isPoint? undefined : () => {setIsPoint(true), setIsLoading(true)}}
                >Points</button>
                <button
                    className={!isPoint? "text-3xl text-white h-18 bg-cyan-400 w-18 rounded-full border-2 p-4 shadow-lg shadow-cyan-400/40" : "text-3xl text-white h-18 bg-cyan-400 w-18 rounded-full border-2 p-4 shadow-lg shadow-cyan-400/40 grayscale"}
                    onClick={!isPoint? undefined : () => {setIsPoint(false), setIsLoading(true)}}
                >Strike</button>
                  </div>
                  <div className="pl-4 pr-4 pt-4 pb-4 border-2 rounded-3xl">
                {sortLeaderBoard !== undefined && sortLeaderBoard.slice(beforeIndex, beforeIndex + limit).map((value:LeaderBoardUser, index:number) => (
                    <div className={value.userId === session.user!.id? "bg-cyan-200 drop-shadow-lg rounded-3xl flex inline-block items-center" : "flex inline-block items-center"} key={"or"+index}>
                      <section className="pl-4 pr-8 w-6 font-semibold">
                        {(1+index+beforeIndex)+"."}
                      </section>
                      <section className="w-12">
                        {value.user.image && <img
                            className="rounded-full"
                            alt="Sorry, we couldn't load this picture"
                            src={value.user.image}
                        />}
                        {!value.user.image && <FaUserGraduate className="text-2xl text-white h-12 bg-green-400 w-12 rounded-full border-2 p-2"/>}
                      </section>
                      <section className="p-6 w-64">
                          <div className="font-semibold">{value.user.username ? value.user.username : value.user.name}</div>
                            <div className="text-sm text-red-600"><AiTwotoneFire className="inline-block"/>{value.strike}+ strike</div>
                      </section>
                      <section className="p-6">
                        {isPoint &&" "+value.totalPoints}
                        {!isPoint &&" "+value.strike}
                      </section>
                    </div>
                ))}
                  </div>
                  <div className="flex flex-inline justify-center p-10">
                      <RiArrowLeftSLine onClick={() => loadBefore()} />
                      <RiArrowRightSLine onClick={() => loadAfter()} />
                      <MdKeyboardDoubleArrowUp onClick={() => loadFirst()} />
                  </div>
              </div>

            </>
        )}
      </div>
  )
}