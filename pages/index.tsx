import React from "react";
import { Inter } from 'next/font/google'
import { useSession } from "next-auth/react";
import SignOutButton from "@/components/SignOutButton";
import AccessDenied from "@/components/AccessDenied";
import SignUpButton from "@/components/SignUpButton";
import {updatePoints} from "@/components/updatePoints";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session, status, update } = useSession();


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
              <button onClick={() => {updatePoints(session.user?.totalPoints+5, session.user?.id); update({id : session.user.id})}}>Add 5 points just for test</button>
            <SignOutButton />
          </>
      )}
    </div>
  )
}
