import React from "react"
import PrimaryFooter from "components/Layout/PrimaryFooter";

export default function LoginLayout(props) {
    return (
        <>
            <h2>Welcome to ATS</h2>
            <main>{props.children}</main>
            <PrimaryFooter />
        </>
    )
};