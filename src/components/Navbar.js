import React from "react"
import logo from "../images/logo.png"

function Navbar() {
    return (
        <nav className="nav">
            <img src={logo} className="nav-icon" />
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">React Course - project 1</h4>
        </nav>
    )
}

export default Navbar
