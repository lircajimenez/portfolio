import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import About from "./components/sections/About";
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
      <About />
    </Router>
  );
};

export default App;
