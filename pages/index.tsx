import React from "react";
import { Inter } from 'next/font/google'
import { useSession } from "next-auth/react";
import SignOutButton from "@/components/SignOutButton";
import AccessDenied from "@/components/AccessDenied";
import SignUpButton from "@/components/SignUpButton";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Lessons from "@/pages/lessons2";
import Link from "next/link";


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

              <Link href="lessons">Start game</Link>
            <SignOutButton />
          </>
      )}
    </div>
  )
}
