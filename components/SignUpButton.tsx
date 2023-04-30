import React from "react";
import Link from "next/link"
const SignUpButton = () => {
    return (
        <div>
            <Link href="/auth/signup">
                Sign up
            </Link>
        </div>
    )
}

export default SignUpButton