import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Document from "./components/Document";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Document/>
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;