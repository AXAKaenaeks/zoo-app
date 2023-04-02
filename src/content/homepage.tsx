import './homepage.css';
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from "@mui/material";
import {useState} from "react";
function Homepage() {
    return (
        <>

            <header className="header">
                     <h1>Zoo-App</h1>
                <nav className="navbar">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Karte</a></li>
                        <li><a href="#">Restaurant</a></li>
                        <li><a href="#">Anderes</a></li>
                    </ul>
                </nav>
            </header>
            <main className="main">
            <div className="homeText">
                <h1>NEUES FÜR DIE GROSSKATZEN</h1>
                <p>Anstelle der heutigen Anlagen von Schneeleopard, Tiger, Wolf und Löwe entsteht «Panterra» – <br/>
                eine Grosskatzenanlage mit Rotationssystem. Wie das funktioniert und was es den Tieren bringt.</p>
            </div>
                <div className="grid-container">
                    <div className="grid-item">
                        <h4>TICKETKAUF</h4>
                        <p>Das ist der Ablauf eines ticket kaufs...</p>

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
                    <div className="grid-item">
                        Element 3
                        <p>geöffnet von:</p>
                        <p>MO: 9:00 - 18:00</p>
                        <p>DI: 9:00 - 18:00</p>
                        <p>MI: 8:00 - 18:00</p>
                        <p>DO: 9:00 - 18:00</p>
                        <p>FR: 9:00 - 18:00</p>
                        <p>SA: 9:00 - 19:00</p>
                    </div>
                    <div className="grid-item">
                        Element 3
                        <p>geöffnet von:</p>
                        <p>MO: 9:00 - 18:00</p>
                        <p>DI: 9:00 - 18:00</p>
                        <p>MI: 8:00 - 18:00</p>
                        <p>DO: 9:00 - 18:00</p>
                        <p>FR: 9:00 - 18:00</p>
                        <p>SA: 9:00 - 19:00</p>
                    </div>
                    <div className="grid-item">
                        Element 3
                        <p>geöffnet von:</p>
                        <p>MO: 9:00 - 18:00</p>
                        <p>DI: 9:00 - 18:00</p>
                        <p>MI: 8:00 - 18:00</p>
                        <p>DO: 9:00 - 18:00</p>
                        <p>FR: 9:00 - 18:00</p>
                        <p>SA: 9:00 - 19:00</p>
                    </div>
                    <div className="grid-item">
                        Element 3
                    </div>
                </div>
            </main>
            <div className="footer">
                <div className="menu">
                    <ul>
                        <li><a href="#">Karte</a></li>
                        <li><a href="#">Restaurant</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Anderes</a></li>
                    </ul>
                </div>

                <div className="menu">
                    <ul>
                        <li><a href="#">Datenschutz</a></li>
                        <li><a href="#">Impressum</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Homepage;