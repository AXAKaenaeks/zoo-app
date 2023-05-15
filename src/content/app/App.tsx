import React from 'react';
import {Link, matchPath, Route, Routes, useLocation} from "react-router-dom";
import Homepage from "../homepage/homepage";
import Logo from "../img/logo-transparent.svg";
import './App.scss';
import '../global-styles.scss';
import {Tab, Tabs} from "@mui/material";

function App() {
    const useRouteMatch = (patterns: readonly string[]) => {
        const {pathname} = useLocation();

        for (const pattern of patterns) {
            const possibleMatch = matchPath(pattern, pathname);
            if (possibleMatch !== null) {
                return possibleMatch;
            }
        }
        return null;
    }
    const routeMatch = useRouteMatch(['/buy-tickets', '/restaurants', '/map', '/']);
    const currentTab = routeMatch?.pattern?.path;

    return (
        <>
            <header>
                <div className="center">
                    <img className="logo" src={Logo} alt=""/>
                    <h1 className="zoo-name">Zoo-Tropolis</h1>
                    <Tabs value={currentTab} textColor="inherit">
                        <Tab label="Startseite" value="/" to="/" component={Link}/>
                        <Tab label="Karte" value="/map" to="/map" component={Link}/>
                        <Tab label="Restaurants" value="/restaurants" to="/restaurants" component={Link}/>
                        <Tab label="Tickets kaufen" value="/buy-tickets" to="/buy-tickets" component={Link}/>
                    </Tabs>
                </div>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/map" element={<div/>}/>
                    <Route path="/restaurants" element={<div/>}/>
                    <Route path="/buy-tickets" element={<div/>}/>
                </Routes>
            </main>

            <footer>
                <Link to="/impressum">Impressum</Link>
                <Link to="/privacy-policy">Datenschutz</Link>
            </footer>
        </>
    );
}

export default App;
