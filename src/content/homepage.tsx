import './homepage.css';
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from "@mui/material";
import {useState} from "react";

function Homepage() {
    return (
        <>
            <main className="main">
                <div className="homeText">
                    <h1>NEUES FÜR DIE GROSSKATZEN</h1>
                    <p>Anstelle der heutigen Anlagen von Schneeleopard, Tiger, Wolf und Löwe entsteht «Panterra» – <br/>
                        eine Grosskatzenanlage mit Rotationssystem. Wie das funktioniert und was es den Tieren bringt.
                    </p>
                </div>
                <div className="grid-item">
                    <h4>ÖFFNUNGSZEITEN</h4>
                    <p>geöffnet von:</p>
                    <p>MO: 9:00 - 18:00</p>
                    <p>DI: 9:00 - 18:00</p>
                    <p>MI: 8:00 - 18:00</p>
                    <p>DO: 9:00 - 18:00</p>
                    <p>FR: 9:00 - 18:00</p>
                    <p>SA: 9:00 - 19:00</p>
                </div>
            </main>
        </>
    );
}

export default Homepage;