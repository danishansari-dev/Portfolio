import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

/**
 * Root app component — assembles all portfolio sections
 * in scroll order with gradient dividers between them.
 * Custom cursor overlay sits on top of everything.
 */
export default function App() {
  return (
    <>
      <CustomCursor />
      <main className="relative">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Contact />
      </main>
    </>
  );
}
