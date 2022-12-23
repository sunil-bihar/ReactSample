import React from "react"
import SecondaryHeader from "components/Layout/SecondaryHeader";
import SecondaryFooter from "components/Layout/SecondaryFooter";

export default function SecondaryLayout(props) {
    return (
        <>
            <SecondaryHeader />
            <main>{props.children}</main>
            <SecondaryFooter />
        </>
    );
};