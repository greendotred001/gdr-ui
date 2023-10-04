import React from "react";
import logoPlane from "../../Logo-plane.svg";
import styles from "./styles.module.css";

export interface INavItem {
    title: string;
    link: string;
}

export type NavBarProps = {
    children?: React.ReactElement;
    logo?: string;
    navItems?: INavItem[];
};

export function NavBar({ children, logo, navItems }: NavBarProps) {
    logo = logo ? logo : logoPlane;

    return (
        <div className={styles.nav__container}>
            <div className={styles.nav__background}></div>

            <div className={styles.logo}>
                <a className={styles.nav__link} href="#">
                    <img src={logo} alt="logo" />
                </a>
            </div>

            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    {navItems?.map((item, i) => (
                        <li className={styles.nav__list_item} key={i}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}
                </ul>
                {children}
            </nav>
        </div>
    );
}
