import React from "react";
import { Link } from "react-router-dom";
import LoginLayout from "components/Layout/LoginLayout";


export default function Login() {
  return (
    <>
      <LoginLayout title="Login Page">
      <div className="container-fluid main-header">
      
      <i className='fa fa-spinner fa-spin fa-pulse fa-3x'></i>
        <h1>
          Login Page
        <i className="fa fa-spinner fa-spin"><Link to="/home">Go To Home</Link></i> </h1>
        </div>
      </LoginLayout>
    </>
  );
}
