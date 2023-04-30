import React from "react";
import {useState} from "react";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <form >
                <input type="text" name="username" required value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input type="password" name="password" required value={password}
                       onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}