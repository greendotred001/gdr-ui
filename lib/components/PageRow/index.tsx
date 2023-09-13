import React from "react";
import styles from "./styles.module.css";

export function PageRow({
    children,
    backgroundImg,
}: {
    children: React.ReactNode;
    backgroundImg: React.ReactNode;
}) {
    return (
        <div
            className={styles.pageRow}
            style={{
                height: `calc(100vh - 80px)`,
                width: `100vw`,
            }}
        >
            <div style={{ position: "relative", zIndex: "0" }}>
                <div style={{ position: "absolute", zIndex: "0" }}>
                    {backgroundImg}
                </div>
                <div style={{ position: "relative", zIndex: "10" }}>
                    {children}
                </div>
            </div>
        </div>
    );
}
