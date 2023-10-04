import React from "react";
import styles from "./styles.module.css";

export type RowProps = {
    children?: React.ReactNode;
    backgroundColor?: string;
};

export function Row({ children, backgroundColor }: RowProps) {
    return (
        <div
            className={styles.row}
            style={{ backgroundColor: `${backgroundColor}` }}
        >
            {children}
        </div>
    );
}
