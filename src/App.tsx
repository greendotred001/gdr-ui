//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// use below for developement of library
// import { Root, PageRow } from "../lib/main";
// uncomment to test from dist lib after running npm run build
// import { Button, Label } from "../";

import "./styles/index.css"; // same as using <link ref="stylesheet" href="./styles/app.css" />

function App() {
    return (
        <>
            <header>
                <img src={viteLogo} />
                <div>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Speakers</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <p>CSS Things</p>
            </main>
        </>
    );
}

export default App;
