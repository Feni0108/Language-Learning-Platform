import React from "react";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/router";

// eslint-disable-next-line @typescript-eslint/no-empty-interface

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({ username: "", password: "" });
    const [message, setMessage] = useState('');
    const router = useRouter();
    const endpoint = "http://localhost:3000/api/createUser";

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        // validate your userinfo
        e.preventDefault();

        try {
            const postData = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    username: userInfo.username,
                    password: userInfo.password
                })
            }
            const res = await fetch(endpoint, postData);
            const response = await res.json();

            if (typeof response.response === 'undefined') {
                setMessage("");
                await router.push("/auth/signin");
            } else {
                setMessage(response.response.message);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="sign-in-form">
            <form onSubmit={handleSubmit}>
                <h1>Sign up</h1>
                <p>{message}</p>
                <input
                    value={userInfo.username}
                    onChange={({ target }) =>
                        setUserInfo({ ...userInfo, username: target.value })
                    }
                    type="text"
                    placeholder="John Doe"
                />
                <input
                    value={userInfo.password}
                    onChange={({ target }) =>
                        setUserInfo({ ...userInfo, password: target.value })
                    }
                    type="password"
                    placeholder="********"
                />
                <input type="submit" value="Sign up" />
            </form>
        </div>
    );
};

export default SignUp;