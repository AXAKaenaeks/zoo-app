import React from 'react';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "./content/homepage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
