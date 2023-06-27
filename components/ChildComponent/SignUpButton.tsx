import React from "react";
import { RxEnter } from "react-icons/rx";

const SignUpButton = () => {
  return (
    <div className="mt-10 flex-inline">
      <a
        href="/auth/signup"
        className="bg-teal-500 rounded-3xl py-3 px-8 font-medium inline-block 
            mr-4 hover:bg-transparent hover:border-teal-500 hover:text-gray-800 
            duration-300 hover:border border-transparent text-gray-100"
      >
        Sign up!
      </a>
      <a href="/auth/signin">
        I already have an account!{" "}
        <span className="text-xl inline-block ps-1 align-middle">
          <RxEnter />
        </span>
      </a>
    </div>
  );
};

export default SignUpButton;
