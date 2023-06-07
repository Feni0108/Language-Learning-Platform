import { useSession } from "next-auth/react";
import AccessDenied from "@/components/AccessDenied";
import SignUpButton from "@/components/SignUpButton";
import React, {useEffect, useState} from "react";
import prisma from "@/lib/prisma";
import { GetServerSideProps } from "next";
import { FaUserGraduate } from "react-icons/fa";
import SignOutButton from "@/components/SignOutButton";

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
export default function Leaderboard({leaderBoard}) {
    const {data: session} = useSession();
    const [isPoint, setIsPoint] = useState<boolean>(true);
    const [sortLeaderBoard, setSortLeaderBoard] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function setNewLeaderBoard() {
            if (isPoint) {
                setSortLeaderBoard(leaderBoard.sort(function (a, b) {
                    return a.totalPoints - b.totalPoints
                }).reverse());
            } else {
                setSortLeaderBoard(leaderBoard.sort(function (a, b) {
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


    return (
        <div>
            Hello
            {!session && (
                <>
                    <AccessDenied/>
                    <SignUpButton/>
                </>
            )}
            {!isLoading && session && (
                <>Signed in as {session.user?.email ? session.user.email : session.user.username} <br/>
                    <div>
                        <button
                            onClick={isPoint? null : () => {setIsPoint(true), setIsLoading(true)}}
                        >Points</button>
                        <button
                            onClick={!isPoint? null : () => {setIsPoint(false), setIsLoading(true)}}
                        >Strike</button>
                        {sortLeaderBoard.map((value, index) => (
                            <div key={"or"+index}>
                            <session>
                                {index+1+" "}
                            </session>
                            <session>
                                {value.user.image && <img
                                 alt="Sorry, we couldn't load this picture"
                                 src={value.user.image}
                                />}
                                {!value.user.image && <FaUserGraduate />}
                            </session>
                            <session>
                                {value.user.username ? value.user.username : value.user.name}
                            </session>
                            <session>
                                {isPoint &&" "+value.totalPoints}
                                {!isPoint &&" "+value.strike}
                            </session>
                            </div>
                        ))}
                    </div>
                    <SignOutButton />
                </>
            )}
        </div>
    )
}
