import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

type User = {
  username?: string;
  password?: string;
  passwordAgain?: string;
  isFirstLogin?: boolean;
};

const RegistrationSuccess = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const { user } = router.query;
    if (user) {
      let parsedUser: User = JSON.parse(
        Array.isArray(user) ? user[0] : user,
        function (key, value) {
          if (key === "username") return value;
          if (key === "password") return value;
          if (key === "passwordAgain") return value;
          if (key === "isFirstLogin") return value;
          return value;
        }
      );

      setUser(parsedUser);
    }
  }, [router.query]);

  const handleButtonClick = async () => {
    // Perform logic to update isFirstLogin status
    setUser({ ...user, isFirstLogin: false });

    // Perform automatic login
    const result = await signIn("credentials", {
      username: user!.username,
      password: user!.password,
      redirect: false,
    });

    if (result!.ok) {
      router.push("/");
    } else {
      console.error("Failed to log in.");
    }
  };

  return (
    <div>
      <div className="text-center text-teal-600 m-10">
        Registration Successful!
      </div>
      {/* Access user properties here */}
      {user && (
        <>
          <div className="flex justify-center m-10">
            <button
              className="p-5 text-center w-56 rounded md:rounded-full border-2 hover:border-4"
              onClick={handleButtonClick}
            >
              Log in
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RegistrationSuccess;
