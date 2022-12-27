import React, { useEffect } from "react"
import PrimaryFooter from "components/Layout/PrimaryFooter";
import PropTypes  from "prop-types";

export default function LoginLayout(props) {
    useEffect(() => {
        document.title = props.title;
    }, []);

    return (
        <>
            <h2>Welcome to ATS</h2>
            <main>{props.children}</main>
            <PrimaryFooter />
        </>
    )
};

LoginLayout.defaultProps = {
    title: "Login Layout"
}