import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
// import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Skills from "./Components/Skills";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
        <About />
        <Skills />
        <Projects />
      </div>
    </Router>
  );
}

export default App;
