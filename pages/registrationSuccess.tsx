import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const RegistrationSuccess = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { user } = router.query;
    if (user) {
      const parsedUser = JSON.parse(user);
      setUser(parsedUser);
    }
  }, [router.query]);

  const handleButtonClick = async () => {
    // Perform logic to update isFirstLogin status
    setUser({ ...user, isFirstLogin: false });

    // Perform automatic login
    const result = await signIn("credentials", {
      username: user.username,
      password: user.password,
      redirect: false,
    });

    if (result.ok) {
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
          <p>isFirstLogin: {user.isFirstLogin.toString()}</p>
          <button onClick={handleButtonClick}>Update isFirstLogin</button>
        </>
      )}
    </div>
  );
};

export default RegistrationSuccess;
