import React from 'react';
import { Link } from 'react-router-dom';
import LoginLayout from 'components/Layout/LoginLayout';

export default function SignOut() {
    return (
        <>
            <LoginLayout title="SignOut Page">
                <h1>
                    SignOut Page
                </h1>
                <h3><Link to="/">Go To Login</Link></h3>
            </LoginLayout>
        </>
    );
};