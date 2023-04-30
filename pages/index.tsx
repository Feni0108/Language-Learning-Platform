import React from "react";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useSession } from "next-auth/react";
import Link from "next/link";
import SignOutButton from "@/components/SignOutButton";
import AccessDenied from "@/components/AccessDenied";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session);


  return (
    <div>
      Hello
      {!session && (
          <>
            <AccessDenied />
          </>
      )}
      {session && (
          <>
            <SignOutButton />
          </>
      )}

    </div>
  )
}
