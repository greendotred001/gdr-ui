import React from "react";
import "../../styles/base.css";

type RootProps = {
    children: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
};

/** Root  */
export function Root({ children, header, footer }: RootProps) {
    return (
        <div className="root">
            <div className="header">{header}</div>
            <div className="content">{children}</div>
            <div className="footer">{footer}</div>
        </div>
    );
}
