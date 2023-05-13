import {useSession} from "next-auth/react";
import AccessDenied from "@/components/AccessDenied";
import SignUpButton from "@/components/SignUpButton";
import SignOutButton from "@/components/SignOutButton";
import React from "react";
import prisma from "@/lib/prisma";
import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async () => {
    const leaderBoard = await prisma.leaderboard.findMany({
        include: {
            user: {
                select: {
                    username: true,
                    name: true
                }
            }
        }
        });
    leaderBoard.sort(function (a, b){return a.totalPoints-b.totalPoints}).reverse();
    return {
        props: {leaderBoard: leaderBoard},
    }
}
export default function Leaderboard({leaderBoard}) {
    const {data: session} = useSession();
    console.log(leaderBoard);

    return (
        <div>
            Hello
            {!session && (
                <>
                    <AccessDenied/>
                    <SignUpButton/>
                </>
            )}
            {session && (
                <>Signed in as {session.user?.email ? session.user.email : session.user.username} <br/>
                    <div>
                        {leaderBoard.map((value, index) => (
                            <div key={"or"+index}>
                            <session>
                                {value.user.username ? value.user.username : value.user.name}
                            </session>
                            <session>
                                {" "+value.totalPoints}
                            </session>
                            </div>
                        ))}
                    </div>
                    <SignOutButton/>
                </>
            )}
        </div>
    )
}
