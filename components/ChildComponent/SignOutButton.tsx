import React from "react";
import { signOut } from "next-auth/react";
import i18n from '@/i18n/i18n';


const SignOutButton = () => {
  const t = (key: string) => i18n.t(key);
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
    // Reset the language to default (English)
    await i18n.changeLanguage('en');
  };

  return (
      <div>
        <button
            className="block px-4 py-2 text-sm text-gray-700"
            onClick={handleSignOut}
        >
          {t('Sign_out')}
        </button>
      </div>
  );
};

export default SignOutButton;
