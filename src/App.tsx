//import { useState } from "react";

// use below for developement of library
import { Root, HeroRow, Row, NavBar } from "../lib/main";
// uncomment to test from dist lib after running npm run build
//import { Root, PageRow, NavBar } from "../dist/main";

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
                <HeroRow></HeroRow>

                <Row>
                    <p>Row 01</p>
                </Row>
                <Row backgroundColor="#e37c7c">
                    <p>Row 02</p>
                </Row>
            </Root>
        </>
    );
}

export default App;
