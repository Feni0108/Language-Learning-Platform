import React from "react";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <div>
      <button
        className="block px-4 py-2 text-sm text-gray-700"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Sign out
      </button>
    </div>
  );
};

export default SignOutButton;
