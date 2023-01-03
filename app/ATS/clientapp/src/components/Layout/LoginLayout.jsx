import React, { useEffect } from "react";
import PrimaryFooter from "components/Layout/PrimaryFooter";
import PropTypes from "prop-types";

export default function LoginLayout(props) {
  useEffect(() => {
    document.title = props.title;
  }, []);

  return (
    <>
      <div style={{textAlign: "center",backgroundColor:"whitesmoke"}}>
        <h2>
          <i className="fa fa-solid fa-heart"></i>Welcome to ATS{" "}
          <i className="fa fa-solid fa-heart"></i>
        </h2>
        <main>{props.children}</main>
        <PrimaryFooter />
      </div>
    </>
  );
}

LoginLayout.defaultProps = {
  title: "Login Layout",
};
