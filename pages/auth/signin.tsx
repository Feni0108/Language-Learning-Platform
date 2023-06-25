import React, {useEffect} from "react";
import { signIn, useSession } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/router";
import { AiFillGithub } from "react-icons/ai";
import i18n from '@/i18n/i18n';
import {getLanguageCode} from "@/components/getLanguageCode";

function SignIn() {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      const interfaceLanguage = session?.user?.interfaceLanguage;
      if (interfaceLanguage) {
        const languageCode = getLanguageCode(interfaceLanguage);
        i18n.changeLanguage(languageCode);
      }
    }
  }, [session]);

  if (session) {
    router.push("/");

  } else {
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
      // validate your userinfo
      e.preventDefault();
      console.log(userInfo.username);
      console.log(userInfo.password);

      const res = await signIn("credentials", {
        username: userInfo.username,
        password: userInfo.password,
        redirect: false,
      }).then((res) => {
        if (res!.ok) {
          router.push("/");
        } else {
          setMessage("Invalid password or username");
        }
      });
    };

    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p>{message}</p>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="mt-15 block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    required
                    className="block w-full rounded-md border-0 py-1.5
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-5"
                    value={userInfo.username}
                    onChange={({ target }) =>
                      setUserInfo({ ...userInfo, username: target.value })
                    }
                    type="text"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-grey-500 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-5"
                    value={userInfo.password}
                    onChange={({ target }) =>
                      setUserInfo({ ...userInfo, password: target.value })
                    }
                    type="password"
                    placeholder="********"
                  />
                </div>
              </div>

              <div>
                <input
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-teal-200 px-3 py-1.5 text-sm font-semibold leading-6 text-grey-500 shadow-sm hover:bg-teal-400 hover:text-gray-100"
                  value="Sign in"
                />
              </div>
            </form>

            <div className="mt-5 text-center text-l font-bold leading-9 tracking-tight">
              <button
                className="flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm"
                onClick={() => signIn("github")}
              >
                <span className="inline-flex items-baseline">
                  <AiFillGithub className="mr-3 text-xl" /> GitHub
                </span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default SignIn;