import React, { useEffect } from "react"
import PrimaryHeader from "components/Layout/PrimaryHeader";
import PrimaryFooter from "components/Layout/PrimaryFooter";

export default function PrimaryLayout(props) {
    useEffect(() => {
        document.title = props.title;
    }, []);

    return (
        <>
            <PrimaryHeader />
            <main>{props.children}</main>
            <PrimaryFooter />
        </>
    )
};

PrimaryLayout.defaultProps = {
    title: "Primary Layout"
}