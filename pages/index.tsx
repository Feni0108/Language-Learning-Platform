import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import SignUpButton from "@/components/SignUpButton";
import Link from "next/link";
import Categories from "@/components/Categories";
import { lastGame } from "@/components/lastGame";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session, status, update } = useSession();
  const [isPlayToday, setIsPlayToday] = useState<boolean>();

  useEffect(() => {
    if (session) {
      lastGame(session.user!.id).then((res) => {
        setIsPlayToday(res);
      });
    }
  }, [session]);

  useEffect(() => {
    if (session) {
      update({ id: session.user!.id, type: "updatePoints" });
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
              Your points: {session.user!.totalPoints}
            </p>
            {session.user?.username} <br />
            <br />
            {session.user!.strike! > 0 && (
              <h2>Ohh, yes! You are in {session.user!.strike!} strike!</h2>
            )}
            {session.user!.strike! > 0 && !isPlayToday && (
              <h3>
                Duo sees a {session.user!.strike! + 1}-day streak in your
                future. Will there be that many?
              </h3>
            )}
            <h2>Part 1: Basics</h2>
            <Categories
              progress={session.user!.progress!}
              progressLimit={0}
              type={"Greetings"}
            />
            <Categories
              progress={session.user!.progress!}
              progressLimit={5}
              type={"Family"}
            />
            <Categories
              progress={session.user!.progress!}
              progressLimit={10}
              type={"Animals"}
            />
            <Categories
              progress={session.user!.progress!}
              progressLimit={15}
              type={"Friends"}
            />
            <Categories
              progress={session.user!.progress!}
              progressLimit={20}
              type={"Hobby"}
            />
            <Categories
              progress={session.user!.progress!}
              progressLimit={25}
              type={"Shopping"}
            />
            <h2>Part 2: Advanced</h2>
            <h4 className="font-style: italic">
              This part is under development. Check later!
            </h4>
          </div>
        </div>
      )}
    </>
  );
}
