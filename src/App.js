import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
// import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
