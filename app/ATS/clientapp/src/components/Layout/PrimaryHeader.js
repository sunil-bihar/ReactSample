import React from "react";
import { Link } from "react-router-dom";

export default function PrimaryHeader() {
    return (
        <header>
            <h2>Primary Header</h2>
            <Link to="/home">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/team">Our Team</Link> | <Link to="/signout">LogOut</Link>
        </header>
    );
};