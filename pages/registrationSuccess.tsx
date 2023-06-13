import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";


type User = {
  username?: string,
  password?: string,
  passwordAgain?: string,
  isFirstLogin?: boolean
}


const RegistrationSuccess = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const { user } = router.query;
    console.log(user);
    if (user) {
      let parsedUser : User= JSON.parse(user,  function (key, value) {
       if (key === 'username') return value;
       if (key === 'password') return value;
        if (key === 'passwordAgain') return value;
        if (key === 'isFirstLogin') return value;
        return value;
      })
      console.log(parsedUser);
      console.log(typeof  parsedUser);
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
      <h1>Registration Successful!</h1>
      {/* Access user properties here */}
      {user && (
        <>
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
          <p>isFirstLogin: {user.isFirstLogin!.toString()}</p>
          <button onClick={handleButtonClick}>Update isFirstLogin</button>
        </>
      )}
    </div>
  );
};

export default RegistrationSuccess;
