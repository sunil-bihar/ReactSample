import React from "react";
import { Link } from "react-router-dom";

export default function SecondaryHeader() {
    return (
        <header>
            <h2>Secondary Header</h2>
            <Link to="/home">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/team">Our Team</Link> | <Link to="/signout">LogOut</Link>
        </header>
    );
};