import WelcomeSection from "./components/Welcome";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <WelcomeSection />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
