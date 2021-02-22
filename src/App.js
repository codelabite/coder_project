import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/BuildUp/NavBar";
import SideBar from "./components/BuildUp/SideBar/SideBar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Switch>
        <NavBar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
