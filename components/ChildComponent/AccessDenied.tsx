import React from "react";
import Link from "next/link";

const AccessDenied = () => {
    return (
        <>
            <h3>You are not logged in</h3>
            <Link href="/auth/signin">
                Click here to view login page
            </Link>
        </>
    )
}

export default AccessDenied;