//import { useState } from "react";
//import reactLogo from "./assets/react.svg";

import { NavBar } from "../lib/components/NavBar";

// use below for developement of library
import { Root, PageRow } from "../lib/main";
// uncomment to test from dist lib after running npm run build
// import { Root } from "../";

const NavItems = [
    { title: "About", link: "#" },
    { title: "Contact", link: "#" },
];

function App() {
    return (
        <>
            <Root
                header={<NavBar navItems={NavItems}></NavBar>}
                footer={
                    <div>
                        <p>footer</p>
                    </div>
                }
            >
                <PageRow />
                <PageRow />
                <PageRow />
                <PageRow />
                <PageRow />
                <PageRow />
            </Root>
        </>
    );
}

export default App;
