//import { useState } from "react";
//import reactLogo from "./assets/react.svg";

import { NavBar } from "../lib/components/NavBar";

// use below for developement of library
import { Root } from "../lib/main";
// uncomment to test from dist lib after running npm run build
// import { Button, Label } from "../";

//import "./styles/index.css"; // same as using <link ref="stylesheet" href="./styles/app.css" />

function App() {
    return (
        <>
            <Root>
                <NavBar children={<></>} />

                <main>
                    <p>CSS Things</p>
                </main>
            </Root>
        </>
    );
}

export default App;
