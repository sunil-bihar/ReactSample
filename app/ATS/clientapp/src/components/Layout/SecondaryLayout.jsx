import React, { useEffect } from "react"
import SecondaryHeader from "components/Layout/SecondaryHeader";
import SecondaryFooter from "components/Layout/SecondaryFooter";

export default function SecondaryLayout(props) {
    useEffect(() => {
        document.title = props.title;
    }, []);

    return (
        <>
            <SecondaryHeader />
            <hr />
            <main>{props.children}</main>
            <hr />
            <SecondaryFooter />
        </>
    );
};

SecondaryLayout.defaultProps = {
    title: "Secondary Layout"
}