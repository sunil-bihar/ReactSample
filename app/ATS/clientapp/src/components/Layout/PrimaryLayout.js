import React from "react"
import PrimaryHeader from "components/Layout/PrimaryHeader";
import PrimaryFooter from "components/Layout/PrimaryFooter";

export default function PrimaryLayout(props) {
    return (
        <>
            <PrimaryHeader />
            <main>{props.children}</main>
            <PrimaryFooter />
        </>
    )
};