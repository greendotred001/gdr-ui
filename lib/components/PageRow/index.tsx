import React from "react";
import styles from "./styles.module.css";
import cityScapeSVG from "/cityscape.svg";

export type PageRowProps = {
    children?: React.ReactNode;
    backgroundImg?: string;
};

export function PageRow({ children, backgroundImg }: PageRowProps) {
    backgroundImg = backgroundImg ? backgroundImg : cityScapeSVG;

    return (
        <div className={styles.pageRow}>
            <div className={styles.pagerow__container}>
                <div className={styles.pagerow__background}>
                    <img src={backgroundImg} alt="bg" />
                </div>
                <div className={styles.pagerow__contents}>{children}</div>
            </div>
        </div>
    );
}
