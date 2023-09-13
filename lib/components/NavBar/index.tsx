import React from "react";
import logoPlane from "/Logo-plane.svg";

export function NavBar({ children }: { children: React.ReactElement | null }) {
    return (
        <>
            <header className="header">
                <a className="header__link" href="#">
                    <img src={logoPlane} alt="logo" />
                </a>

                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__list-item">
                            <a href="#">About</a>
                        </li>
                        <li className="nav__list-item">
                            <a href="#">Blogs</a>
                        </li>
                        <li className="nav__list-item">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
            {children}
        </>
    );
}
