import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {getSession, useSession} from "next-auth/react";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import i18n from '../../i18n/i18n';
import {getLanguageCode} from "@/components/getLanguageCode";
import SignUpButton from "@/components/SignUpButton";
import { Language } from '@prisma/client';
import authOptions  from '@/pages/api/auth/[...nextauth]'
import { GetServerSideProps } from 'next';
import prisma from '@/lib/prisma';

interface UserSettings {
  interfaceLanguage: Language | string;
  targetLanguage: Language | string;
  learningGoal: string;
  userId: string;
};

interface userProgress {
  userProgress: {
    interfaceLanguage: Language,
    targetLanguage: Language,
    proress: number
  }[];
}

interface SettingsProps {
  userSettings: UserSettings | null;
  userProgress: userProgress | null;

}



const SettingsPage: React.FC<SettingsProps> = ({userSettings, userProgress}) => {
  console.log(userProgress);
  const router = useRouter();
  const {data: session, update} = useSession();
  const [interfaceLanguage, setInterfaceLanguage] = useState<Language | string>(userSettings?.interfaceLanguage || '');
  const [targetLanguage, setTargetLanguage] = useState<Language | string>(userSettings?.targetLanguage || '');
  const [learningGoal, setLearningGoal] = useState<string>(userSettings?.learningGoal || '');
  const t = (key: string) => i18n.t(key);

  useEffect(() => {
    if (session) {
      if (session?.user?.interfaceLanguage !== undefined &&
          session.user?.learningGoal !== undefined &&
          session.user?.targetLanguage !== undefined) {
        setInterfaceLanguage(session.user.interfaceLanguage!);
        setTargetLanguage(session.user.targetLanguage!);
        setLearningGoal(session.user.learningGoal!);
      }
    }
  }, [session]);

  useEffect(() => {
    if (userSettings) {
      setInterfaceLanguage(userSettings.interfaceLanguage);
      setTargetLanguage(userSettings.targetLanguage);
      setLearningGoal(userSettings.learningGoal);
    }
  }, [userSettings]);

  useEffect(() => {
    if (interfaceLanguage) {
      const languageCode = getLanguageCode(interfaceLanguage);
      i18n.changeLanguage(languageCode);
    }
  }, [interfaceLanguage]);

  const handleSaveSettings = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const settings: UserSettings = {
      interfaceLanguage,
      targetLanguage,
      learningGoal,
      userId: session!.user!.id
    };

    try {
      const response = await fetch('/api/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': `Bearer ${session?.token}`,
        },
        body: JSON.stringify(settings),
      });
      if (response.ok) {
        update({id: session!.user!.id, type: "settings"}).then((response) => {
              if (response) {
                router.push("/settings");
              }
            }
        );
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!session) {
    return <div>Please log in to access this page.
      <SignUpButton/>
    </div>;
  }

  if (userSettings === null) {
    return <div>Loading...</div>;
  }

  const renderSettingsText = (value: string, defaultValue: string) => {
    if (value) {
      return t(value);
    } else {
      return <span className="text-gray-500">{defaultValue}</span>;
    }
  };

  return (
      <div className="p-4 bg-gray-100 flex inline-block">
      <div className="p-4 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">{session && `${session.user?.username} ${t('s_settings')}`}</h1>
        <div className="mb-4">
          <label htmlFor="interface-language" className="mr-2">
            {t('interfaceLanguage')}:
          </label>
          <div className="flex items-center">
            {renderSettingsText(interfaceLanguage, t('setInterfaceLanguage'))}
            <select
                id="interface-language"
                value={interfaceLanguage}
                onChange={(e) => setInterfaceLanguage(e.target.value)}
                className="p-2 border border-gray-300 rounded ml-2"
            >
              <option value="">{t('chooseInterfaceLanguage')}</option>
              {targetLanguage != Language.eng && <option value={Language.eng}>{t('english')}</option>}
              {targetLanguage != Language.hu && <option value={Language.hu}>{t('hungarian')}</option>}
              {targetLanguage != Language.cz && <option value={Language.cz}>{t('czech')}</option>}
              {targetLanguage != Language.sk && <option value={Language.sk}>{t('slovak')}</option>}
              {targetLanguage != Language.is && <option value={Language.is}>{t('icelandic')}</option>}

            </select>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="target-language" className="mr-2">
            {t('targetLanguage')}:
          </label>
          <div className="flex items-center">
            {renderSettingsText(targetLanguage, t('setTargetLanguage'))}
            <select
                id="target-language"
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
                className="p-2 border border-gray-300 rounded ml-2"
            >

              <option value="">{t('chooseTargetLanguage')}</option>
              {interfaceLanguage != Language.eng && <option value={Language.eng}>{t('english')}</option>}
              {interfaceLanguage != Language.hu && <option value={Language.hu}>{t('hungarian')}</option>}
              {interfaceLanguage != Language.cz && <option value={Language.cz}>{t('czech')}</option>}
              {interfaceLanguage != Language.sk && <option value={Language.sk}>{t('slovak')}</option>}
              {interfaceLanguage != Language.is && <option value={Language.is}>{t('icelandic')}</option>}

            </select>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="learning-goal" className="mr-2">
            {t('learningGoal')}:
          </label>
          <div className="flex items-center">
            {renderSettingsText(learningGoal, t('setLearningGoal'))}
            <select
                id="learning-goal"
                value={learningGoal}
                onChange={(e) => setLearningGoal(e.target.value)}
                className="p-2 border border-gray-300 rounded ml-2"
            >
              <option value="">{t('chooseLearningGoal')}</option>
              <option value="1">{t('basicLevel')}</option>
              <option value="10">{t('convenientLevel')}</option>
              <option value="20">{t('normalLevel')}</option>
              <option value="30">{t('seriousLevel')}</option>
              <option value="50">{t('intensiveLevel')}</option>
            </select>
          </div>
        </div>
        {interfaceLanguage && targetLanguage && learningGoal && (
            <button
                onClick={handleSaveSettings}
                className="bg-teal-500 text-white py-2 px-4 rounded"
            >
              {t('Save')}
            </button>
        )}

      </div>
        <div className="text-2xl font-bold m-4 pl-20">
          <h1>Your progress so far:</h1>

        </div>
      </div>
  );
}

/*export const getServerSideProps = async ({locale = 'en'}: { locale: string }) => {
  const translations = await serverSideTranslations(locale, ['common']);

  return {
    props: {
      ...translations,
    },
  };
};*/
export const getServerSideProps: GetServerSideProps = async (context) => {
  let session = await getSession(context);
  if (session){
    const userProgress = await prisma.userProgress.findMany({
      where: {
        userId: session.user!.id
      },
      select: {
        interfaceLanguage: true,
        targetLanguage: true,
        progress: true
      },
    });
    return {
      props: {
        userProgress
      },
    }
  }

  return {
    props: {  }
  }

}
export default SettingsPage;

