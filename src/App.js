//import "./styles/App.css";
import Header from "./components/Header";
import General from "./components/General";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import SubmitButton from "./components/SubmitButton";

function App() {
  return (
    <>
      <Header />
      <div id="cv-container">
        <div id="main-left">
          <General />
          <Contact />
        </div>
        <div id="main-right">
          <About />
          <Education />
          <Experience />
          <Skills />
        </div>
      </div>
      <SubmitButton />
      <Footer />
    </>
  );
}

export default App;
