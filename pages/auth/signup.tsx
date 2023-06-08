import React, { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({ username: "", password: "", passwordAgain: "", isFirstLogin: true });
  const [message, setMessage] = useState("");
  const router = useRouter();
  const endpoint = "http://localhost:3000/api/createUser";

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userInfo.username,
          password: userInfo.password,
          passwordAgain: userInfo.passwordAgain,
          isFirstLogin: userInfo.isFirstLogin
        }),
      };

      if (userInfo.password !== userInfo.passwordAgain) {
        setMessage("Passwords do not match")
        return false;
      } else if (userInfo.password.length < 8 && !userInfo.password.match(/[A-Z]/)) {
        setMessage("Password needs to be at least 8 character, contain an uppercase letter and a digit")
        return false;
      } else if (userInfo.password.length < 8) {
        setMessage("Password needs to be at least 8 characters")
        return false;
      } else if (!userInfo.password.match(/[A-Z]/)) {
        setMessage("Password needs to contain an uppercase letter")
        return false;
      } else if (!userInfo.password.match(/^(?=.*[0-9])/)) {
        setMessage("Password needs to contain a digit");
        return false;
      }

      const res = await fetch(endpoint, postData);
      const response = await res.json();

      if (typeof response.response === "undefined") {
        setMessage("");
        const updatedUserInfo = { ...userInfo, isFirstLogin: true }; // Create a separate variable with updated values
        setUserInfo(updatedUserInfo); // Update the state if needed (optional)

        // Perform automatic login after registration
        const result = await signIn("credentials", {
          username: userInfo.username,
          password: userInfo.password,
          redirect: false,
        });

        if (result.ok) {
          const updatedUserInfo = { ...userInfo, isFirstLogin: false }; // Update isFirstLogin to false
          setUserInfo(updatedUserInfo); // Update the state if needed (optional)

          await router.push({
            pathname: "/registrationSuccess",
            query: { user: JSON.stringify(updatedUserInfo) },
          });
        } else {
          console.error("Failed to log in after registration.");
        }
      } else {
        setMessage(response.response.message);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to play!
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
              Choose a username:
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
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
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
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>
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
                value={userInfo.passwordAgain}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, passwordAgain: target.value })
                }
                type="password"
                placeholder="********"
              />
              <input
                type="submit"
                className="flex w-full justify-center rounded-md 
                bg-teal-200 px-3 py-1.5 text-sm font-semibold leading-6 
                text-grey-500 shadow-sm hover:bg-teal-400 hover:text-gray-100 mt-5"
                value="Let's go!"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
