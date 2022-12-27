import React from "react";
import { Route, Routes, Link } from "react-router-dom"
import LoginLayout from "components/Layout/LoginLayout";
import PrimaryLayout from "components/Layout/PrimaryLayout";
import SecondaryLayout from "components/Layout/SecondaryLayout";
import { NotFound } from "navigation/NotFound";
import Login from "views/Login/Login";
import SignOut from "views/SignOut/LogOut";
import Home from "views/Home/Home";
import About from "views/About/About";
import ContactUs from "views/ContactUs/ContactUs";
import OurTeam from "views/OurTeam/Team";

export const RouterConfig = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signout" element={<SignOut />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/team" element={<OurTeam />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};
