import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
// import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Projects />
    </div>
  );
}

export default App;
