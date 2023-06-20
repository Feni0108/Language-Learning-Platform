import {useSession} from "next-auth/react";
import AccessDenied from "@/components/AccessDenied";
import SignUpButton from "@/components/SignUpButton";
import React, {useEffect, useState} from "react";
import prisma from "@/lib/prisma";
import {GetServerSideProps} from "next";
import {FaUserGraduate} from "react-icons/fa";
import SignOutButton from "@/components/SignOutButton";
import {number} from "prop-types";
import i18n from "@/i18n/i18n";
import {getLanguageCode} from "@/components/getLanguageCode";

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
        }
        setNewLeaderBoard().then(
            (res) => {
                setIsLoading(false);
            }
        )
    }, [isPoint])

    if (!session) {
        return <div>Please log in to access this page.
            <SignUpButton/>
        </div>;
    }


    return (

        <div>
            {!isLoading && session && (
                <>{t('Signed_in_as')} {session.user?.email ? session.user.email : session.user!.username} <br/>
                    <div>
                        <button
                            onClick={isPoint? undefined : () => {setIsPoint(true), setIsLoading(true)}}
                        >Points</button>
                        <button
                            onClick={!isPoint? undefined : () => {setIsPoint(false), setIsLoading(true)}}
                        >Strike</button>
                        {sortLeaderBoard !== undefined && sortLeaderBoard.map((value:LeaderBoardUser, index:number) => (
                            <div key={"or"+index}>
                            <section>
                                {index+1+" "}
                            </section>
                            <section>
                                {value.user.image && <img
                                 alt="Sorry, we couldn't load this picture"
                                 src={value.user.image}
                                />}
                                {!value.user.image && <FaUserGraduate />}
                            </section>
                            <section>
                                {value.user.username ? value.user.username : value.user.name}
                            </section>
                            <section>
                                {isPoint &&" "+value.totalPoints}
                                {!isPoint &&" "+value.strike}
                            </section>
                            </div>
                        ))}
                    </div>
                ))}
              </div>
              <SignOutButton/>
            </>
        )}
      </div>
  )
}