import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {useSession} from "next-auth/react";
import SignUpButton from "@/components/SignUpButton";

interface UserSettings {
  interfaceLanguage: string;
  targetLanguage: string;
  learningGoal: string;
  userId: string;
}

interface SettingsProps {
  userSettings: UserSettings;
}

const SettingsPage: React.FC<SettingsProps> = ({userSettings}) => {
  const router = useRouter();
  const {data: session, update} = useSession();
  const [interfaceLanguage, setInterfaceLanguage] = useState<string>(userSettings?.interfaceLanguage || '');
  const [targetLanguage, setTargetLanguage] = useState<string>(userSettings?.targetLanguage || '');
  const [learningGoal, setLearningGoal] = useState<string>(userSettings?.learningGoal || '');

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
                router.push("/");
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
      return value;
    } else {
      return <span className="text-gray-500">{defaultValue}</span>;
    }
  };

  return (
      <div className="p-4 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">{session && `${session.user?.username}'s settings`}</h1>
        <div className="mb-4">
          <label htmlFor="interface-language" className="mr-2">
            Interface language:
          </label>
          <div className="flex items-center">
            {renderSettingsText(interfaceLanguage, 'Set up interface language')}
            <select
                id="interface-language"
                value={interfaceLanguage}
                onChange={(e) => setInterfaceLanguage(e.target.value)}
                className="p-2 border border-gray-300 rounded ml-2"
            >
              <option value="">Choose an interface language...</option>
              <option value="english">English</option>
              <option value="hungarian">Hungarian</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="target-language" className="mr-2">
            Target language:
          </label>
          <div className="flex items-center">
            {renderSettingsText(targetLanguage, 'Set up target language')}
            <select
                id="target-language"
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
                className="p-2 border border-gray-300 rounded ml-2"
            >
              <option value="">Choose a language to learn...</option>
              <option value="english">English</option>
              <option value="hungarian">Hungarian</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="learning-goal" className="mr-2">
            Learning goal:
          </label>
          <div className="flex items-center">
            {renderSettingsText(learningGoal, 'Set up learning goal')}
            <select
                id="learning-goal"
                value={learningGoal}
                onChange={(e) => setLearningGoal(e.target.value)}
                className="p-2 border border-gray-300 rounded ml-2"
            >
              <option value="">Choose a learning goal...</option>
              <option value="1">Basic level: 1 point per day</option>
              <option value="10">Convenient: 10 points per day</option>
              <option value="20">Normal: 20 points per day</option>
              <option value="30">Serious: Daily 30 points</option>
              <option value="50">Intensive: Daily 50 points</option>
            </select>
          </div>
        </div>
        {interfaceLanguage && targetLanguage && learningGoal && (
            <button
                onClick={handleSaveSettings}
                className="bg-teal-500 text-white py-2 px-4 rounded"
            >
              Save
            </button>
        )}
      </div>
  );
}

export default SettingsPage;