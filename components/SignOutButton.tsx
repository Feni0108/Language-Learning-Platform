import React from "react";
import {signOut} from "next-auth/react";

const SignOutButton = () => {
    return (
        <div>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
    )
}

export default SignOutButton;