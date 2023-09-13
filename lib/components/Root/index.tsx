import React from "react";
import "../../styles/base.css";

export function Root({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}
