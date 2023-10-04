import React from "react";
import cityScapeSVG from "../../cityscape.svg";
import styles from "./styles.module.css";
import calloutSVG from "../../Callout2.svg";

export type HeroRowProps = {
    children?: React.ReactNode;
};

export function HeroRow({ children }: HeroRowProps) {
    return (
        <div className={styles.row}>
            <img className={styles.backgroundImage} src={cityScapeSVG} alt="" />

            <div className={styles.searchImage}>
                <img
                    className={styles.backgroundImage}
                    src={calloutSVG}
                    alt=""
                />
            </div>
            <div className={styles.content}>
                <h1>Find the Best Real Estate Markets to Invest In</h1>
                <p>Analyize over 19,000 cities across the United States</p>
                {children}
            </div>
        </div>
    );
}
