import React, {useEffect, useState} from "react";
import {Inter} from "next/font/google";
import {useSession} from "next-auth/react";
import SignUpButton from "@/components/ChildComponent/SignUpButton";
import Link from "next/link";
import Categories from "@/components/ChildComponent/Categories";
import CategoryArrangament from "@/components/ChildComponent/CategoryArrangement";
import {lastGame} from "@/components/lastGame";
import {useRouter} from "next/router";
import i18n from '@/i18n/i18n';
import {getLanguageCode} from "@/components/getLanguageCode";
import { SiMediafire } from "react-icons/si";
import { DuolingoSees } from "@/db/blob";
import {FaBasketballBall, FaCat, FaFlagCheckered, FaShoppingCart, FaUserFriends } from "react-icons/fa";
import { BiBarChart } from "react-icons/bi"
import { GiNothingToSay, GiWashingMachine } from "react-icons/gi"
import { MdFamilyRestroom } from "react-icons/md";
import { BsFillCalendarDayFill } from "react-icons/bs";
import { ImSortNumbericDesc } from "react-icons/im";
import { Language } from "@prisma/client";

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
  const categoryTranslations = {
    Greetings: {name: t("Greetings"), icon: <GiNothingToSay />},
    Family: {name: t("Family"), icon: <MdFamilyRestroom />},
    Animals: {name: t("Animals"), icon: <FaCat />},
    Number: {name: t("Number"), icon: <ImSortNumbericDesc />},
    Calendar: {name: t("Calendar"), icon: <BsFillCalendarDayFill />},
    Friends: {name: t("Friends"), icon: <FaUserFriends />},
    Hobby: {name: t("Hobby"), icon: <FaBasketballBall />},
    Living: {name: t("Living"), icon: <GiWashingMachine />},
    Shopping: {name: t("Shopping"), icon: <FaShoppingCart />}
  };

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
          <div className=" flex justify-center">
        <div className="text-gray-700 max-w-5xl px-20 py-28">
          <h1 className="text-6xl font-semibold leading-normal flex justify-center ">
            {t('Welcome')+", "}

            <span className="text-6xl font-semibold leading-normal">
              {session.user?.name ? session.user?.name : session.user?.username}
              !
            </span>
          </h1>
          <div>
            <p className="m-5 text-xl font-semibold flex justify-center">
              {t('Your_points')}: {session.user!.totalPoints}
            </p>

            {session.user!.strike! > 0 && (<div className="flex inline-block justify-center text-red-600 mt-5 mb-5">
            <SiMediafire className="text-6xl"/>
              <h2 className={session.user!.interfaceLanguage === Language.hu? "flex items-center text-2xl" :"flex items-center text-3xl"}>{t('Ohh, yes! You are in')} {session.user!.strike!} {t('streak')}!</h2>
              <SiMediafire className="text-6xl transform: rotate-180"/>
            </div>)}
            {session.user!.strike! > 0 && !isPlayToday && (<div className="w-148 justify-center">
            <img src={`data:image/jpeg;base64,${DuolingoSees}`} />


              <h3 className="mt-4 mb-4 flex justify-center text-center text-l font-semibold text-green-600">
                {t("Duo sees a")} {session.user!.strike! + 1}-{t('day streak in your future. Will there be that many')}?
              </h3>
            </div>)}
            <div className="flex inline-block justify-between bg-lime-400 mt-5  text-4xl p-2 rounded-xl shadow-lg shadow-lime-400/40">
              <FaFlagCheckered />
            <h2>{t('Part_1_Basics')}</h2>
              <FaFlagCheckered />
            </div>
            <React.Fragment>
            {Object.entries(categoryTranslations).map((category, index) => (
              <div key={index}>

                <CategoryArrangament progress={session.user!.actualProgress!}
                                     progressLimit={5 * index}
                                     type={category[0]}
                                     displayType={category[1].name}
                                     icon={category[1].icon}
                                     order={index}/>

              </div>

            ))}
            </React.Fragment>
            <div className="flex inline-block justify-between bg-cyan-400 mt-5 mb-5 text-4xl p-2 rounded-xl shadow-lg shadow-cyan-400/40">
              <BiBarChart />
            <h2>{t('Part_2_Advanced')}</h2>
              <BiBarChart />
            </div>
            <h4 className="font-style: italic text-center">
              {t('This part is under development. Check later!')}
            </h4>
          </div>
        </div>
          </div>
      )}
    </>
  );
};

/*
* <div>
                  {index%2==0 ?
                      <div className="p-5   mr-60 rounded rounded-full border-2">
                      <Categories
                          progress={session.user!.actualProgress!}
                          progressLimit={5*index}
                          type={category[0]}
                          displayType={category[1]}
                      /></div> :
                      <div className="p-5  ml-40 flex justify-end  rounded rounded-full border-2">
                      <Categories
                          progress={session.user!.actualProgress!}
                          progressLimit={5*index}
                          type={category[0]}
                          displayType={category[1]}
                      />
                      </div>
                }
                </div>
* */