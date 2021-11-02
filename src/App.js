import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Skills from "./components/sections/Skills";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  //for sidebar
  const [isOpen, setIsOpen] = useState(false);
  //for nav
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <GlobalStyles />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <Hero />
      <Projects />
      <Skills />
    </Router>
  );
};

export default App;
