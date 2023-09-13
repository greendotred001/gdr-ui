import React from "react";
import style from "./styles.module.css";

export function Root({ children }: { children: React.ReactNode }) {
    return <div className={style.gdrMain}>{children}</div>;
}
