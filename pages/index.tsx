import React from "react";
import { Inter } from 'next/font/google'
import { useSession } from "next-auth/react";
import SignOutButton from "@/components/SignOutButton";
import AccessDenied from "@/components/AccessDenied";
import SignUpButton from "@/components/SignUpButton";
import {createLeaderBoard} from "@/components/createLeaderBoard";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session, status } = useSession();


  return (
    <div>
      Hello
      {!session && (
          <>
            <AccessDenied />
            <SignUpButton />
          </>
      )}
      {session && (
          <>Signed in as {session.user?.email ? session.user.email : session.user.username} <br />
              <img src={session.user?.image}/> <br />
              {console.log(session.user)}
              <h4>Your points: {session.user.totalPoints}</h4>
              {session.user?.username} <br />
            <SignOutButton />
          </>
      )}
    </div>
  )
}
