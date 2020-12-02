import React from 'react';

function Nav() {
    return (
        <nav>
            <ul className="flex-row">
                <li>
                    <a href="#about">
                        About me
                    </a>
                </li>
                <li>
                    <span>Contact</span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;