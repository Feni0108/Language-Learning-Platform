import React, {useEffect, useState} from "react";
import {Inter} from "next/font/google";
import {useSession} from "next-auth/react";
import SignUpButton from "@/components/SignUpButton";
import Link from "next/link";
import Categories from "@/components/Categories";
import {lastGame} from "@/components/lastGame";
import {useRouter} from "next/router";
import i18n from '@/i18n/i18n';
import {getLanguageCode} from "@/components/getLanguageCode";

const inter = Inter({subsets: ["latin"]});

interface UserSettings {
  interfaceLanguage: string;
  targetLanguage: string;
  learningGoal: string;
  userId: string;
}

interface SettingsProps {
  userSettings: UserSettings | null;
}

export default function Home({userSettings}: SettingsProps) {
  const {data: session, status, update} = useSession();
  const [isPlayToday, setIsPlayToday] = useState<boolean>();
  const [interfaceLanguage, setInterfaceLanguage] = useState<string>(userSettings?.interfaceLanguage || '');
  const t = (key: string) => i18n.t(key);

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
      router.push("/settings");
    }
  }

  useEffect(() => {
    if (interfaceLanguage) {
      const languageCode = getLanguageCode(interfaceLanguage);
      i18n.changeLanguage(languageCode);
    }
  }, [interfaceLanguage]);

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
            {t('Welcome')},
            <span className="font-light px-10">
              {session.user?.name ? session.user?.name : session.user?.username}
              !
            </span>
          </h1>
          <div>
            <p className="m-5 text-xl">
              {t('Your_points')}: {session.user!.totalPoints}
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
            <h2>{t('Part_1_Basics')}</h2>
            <Categories
              progress={session.user!.progress!}
              progressLimit={0}
              type={t("Greetings")}
            />
            <Categories
              progress={session.user!.progress!}
              progressLimit={5}
              type={t("Family")}
            />
            <Categories
              progress={session.user!.progress!}
              progressLimit={10}
              type={t("Animals")}
            />
            <Categories
                progress={session.user!.progress!}
                progressLimit={15}
                type={"Numbers"}
            />
            <Categories
                progress={session.user!.progress!}
                progressLimit={20}
                type={"Calendar"}
            />
            <Categories
              progress={session.user!.progress!}
              progressLimit={25}
              type={"Friends"}
            />
            <Categories
              progress={session.user!.progress!}
              progressLimit={30}
              type={"Hobby"} />

            <Categories
                progress={session.user!.progress!}
                progressLimit={35}
                type={"Living"}
            />
            <Categories
              progress={session.user!.progress!}
              progressLimit={40}
              type={"Shopping"}

            />
            <h2>{t('Part_2_Advanced')}</h2>
            <h4 className="font-style: italic">
              This part is under development. Check later!
            </h4>
          </div>
        </div>
      )}
    </>
  );
}