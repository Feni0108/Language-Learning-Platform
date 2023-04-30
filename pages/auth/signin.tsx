import React from "react";
import { NextPage } from "next";
import {signIn, useSession} from "next-auth/react";
import { FormEventHandler, useState } from "react";
import {  useRouter} from "next/router";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
    const [userInfo, setUserInfo] = useState({ username: "", password: "" });
    const [message, setMessage] = useState('');
    const { data: session, status } = useSession();
    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        // validate your userinfo
        e.preventDefault();

        const res = await signIn("credentials", {
            username: userInfo.username,
            password: userInfo.password,
            redirect: false

        }) .then((res) => {
            if (res.ok) {
                router.push("http://localhost:3000");
            } else {
                setMessage("Invalid password or username");
            }
        });
    };

    return (
        <div className="sign-in-form">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>

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
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default SignIn;