import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/Nav/NavTabs";
import Home from "./components/pages/Home";
// import Saved from "./components/pages/Saved";
// import About from "./components/pages/About"; 

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        {/* <Route path="/saved" component={Saved} />
        <Route path="/about" component={About} /> */}
      </div>
    </Router>
  );
}

export default App;
