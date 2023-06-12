import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import SignUpButton from "@/components/SignUpButton";
import Link from "next/link";
import { lastGame } from "@/components/lastGame";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session, status, update } = useSession();

  const [isPlayToday, setIsPlayToday] = useState<boolean>();

  useEffect(() => {
    if (session) {
      lastGame(session.user?.id).then((res) => {
        setIsPlayToday(res);
      });
    }
  }, [session]);

  useEffect(() => {
    if (session) {
      update({ id: session.user.id });
    }
  }, [isPlayToday]);

  const router = useRouter();

  if (session) {
    console.log(session);
    if (
      session?.user?.interfaceLanguage === undefined &&
      session.user?.learningGoal === undefined &&
      session.user?.targetLanguage === undefined
    ) {
      router.push("http://localhost:3000/settings");
    }
  }

  return (
    <>
      {!session && (
        <div className="text-gray-700 max-w-5xl px-20 py-28">
          <h1 className="text-6xl font-semibold leading-normal">
            Learning, <br />
            it was never so easy!
          </h1>
          <p className="text-s leading-8">
            You can learn new languages while playing! This interactive
            web-based application is designed to make learning easy, fun and
            addictive. We are offering a range of features that are designed to
            help users learn new vocabulary and phrases in a foreign language of
            their choice.
          </p>

          <div className="max-w-6xl">
            <SignUpButton />
          </div>
        </div>
      )}
      {session && (
        <div className="text-gray-700 max-w-5xl px-20 py-28">
          <h1 className="text-6xl font-semibold leading-normal ">
            Welcome,
            <span className="font-light px-10">
              {session.user?.name ? session.user?.name : session.user?.username}
              !
            </span>
          </h1>
          <div>
            <p className="m-5 text-xl">
              Your points: {session.user.totalPoints}
            </p>
            <br />
            {session.user.strike > 0 && (
              <h2>Ohh, yes! You are in {session.user.strike} strike!</h2>
            )}
            {session.user.strike > 0 && !isPlayToday && (
              <h3>
                Duo sees a {session.user.strike + 1}-day streak in your future.
                Will there be that many?
              </h3>
            )}
            <Link
              href="lessons"
              className="bg-teal-500 rounded-3xl py-3 px-8 font-medium inline-block 
            mr-4 hover:bg-transparent hover:border-teal-500 hover:text-gray-800 
            duration-300 hover:border border-transparent text-gray-100"
            >
              Start game
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
