import React from "react";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useSession } from "next-auth/react";
import SignOutButton from "@/components/SignOutButton";
import AccessDenied from "@/components/AccessDenied";
import SignUpButton from "@/components/SignUpButton";

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
              <h4>Your points: {typeof session.user?.totalPoints === "number" ? session.user.totalPoints : "Not imported yet!"}</h4>
              {session.user?.username} <br />
            <SignOutButton />
          </>
      )}
    </div>
  )
}
