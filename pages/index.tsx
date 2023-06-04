import React, {useEffect, useState} from "react";
import { Inter } from 'next/font/google'
import { useSession } from "next-auth/react";
import SignOutButton from "@/components/SignOutButton";
import AccessDenied from "@/components/AccessDenied";
import SignUpButton from "@/components/SignUpButton";
import Link from "next/link";
import {lastGame} from "@/components/lastGame";



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session, status, update } = useSession();
  const [isPlayToday, setIsPlayToday] = useState<boolean>();

  useEffect(() => {
    if (session) {
      lastGame(session.user?.id).then((res) => {
        setIsPlayToday(res);
      });
    }
  }, [session])

  useEffect(() => {
    if (session) {
      update({id: session.user.id})
    }
  }, [isPlayToday])


  return (
    <div>
      {!session && (
          <>
            <AccessDenied />
            <SignUpButton />
          </>
      )}
      {session && (
          <>Signed in as {session.user?.email ? session.user.email : session.user.username} <br />
              <img src={session.user?.image}/> <br />
              <h4>Your points: {session.user.totalPoints}</h4>
              {session.user?.username} <br />
              <br/>
            {session.user.strike > 0 && <h2>Ohh, yes! You are in {session.user.strike} strike!</h2>}
            {session.user.strike > 0 && !isPlayToday && <h3>Duo sees a {session.user.strike+1}-day streak in your future. Will there be that many?</h3>}
              <Link href="lessons">Start game</Link>
            <SignOutButton />
          </>
      )}
    </div>
  )
}
