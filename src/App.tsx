import { Preloader } from "./components/Preloader";
import { CustomCursor } from "./components/CustomCursor";
import { GrainOverlay } from "./components/GrainOverlay";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Timeline } from "./components/Timeline";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
