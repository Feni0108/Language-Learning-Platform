import React from "react";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import SignUpButton from "@/components/SignUpButton";
import Link from "next/link";
import Greetings from "@/components/categories/Greetings";
import Family from "@/components/categories/Family";
import Categories from "@/components/Categories";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session, status, update } = useSession();
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
            <h4>Your points: {session.user.totalPoints}</h4>
            {session.user?.username} <br />
            <Link href="lessons">Start game</Link>
            {session.user?.progress} <br />
            <Categories progress={session.user?.progress} progressLimit={0} type={"Greetings"} />
            <Categories progress={session.user?.progress} progressLimit={5} type={"Family"} />
          </div>
        </div>
      )}
    </>
  );
}
