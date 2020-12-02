import React from 'react';
import headerImage from "../../assets/header/header.jpg";

function Header() {
    return (
        <header>
            <h1 id="header">Nicole Porter</h1>
            <img src={headerImage} style={{ width: "100%" }} alt="header" />
        </header>
    );
}

export default Header;