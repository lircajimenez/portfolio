import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      {/*  HEADER */}
      <Header />
      {/*  HERO / HOME ?? */}
      <Hero />
      {/*  PROJECTS REEL */}
      <Projects />
      {/*  ABOUT ME / SKILLS */}
      <About />
    </Router>
  );
};

export default App;
