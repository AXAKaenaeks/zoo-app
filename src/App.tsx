import React from 'react';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "./content/homepage";
import Logo from "./content/img/logo-transparent.png"
import './App.scss';

function App() {
  return (
      <div>
          <header className="header">
              <img className="logo" src={Logo}/>
              <h1>Zoo-Tropolis</h1>
              <nav className="navbar">
                  <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Karte</a></li>
                      <li><a href="#">Restaurant</a></li>
                      <li><a href="#">Anderes</a></li>
                  </ul>
              </nav>

          </header>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </Router>
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
      </div>
  );
}

export default App;
