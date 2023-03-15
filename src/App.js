import './styling/App.css';
import './styling/NavBar.css';
import Landing from './Landing';
import Slideshow from './Slideshow';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import { useRef } from 'react';
import { scrollDown } from './helpers';

function App() {
  const landingSection = useRef(null);
  const projectsSection = useRef(null);
  const skillsSection = useRef(null);
  const aboutSection = useRef(null);
  const contactSection = useRef(null);

  return (
    <div className="App">
      <div ref={landingSection}><Landing /></div>
      <nav id="NavBar">
        <button onClick={() => scrollDown(landingSection)}>LANDING PAGE</button>
        <button onClick={() => scrollDown(projectsSection)}>PROJECTS</button>
        <button onClick={() => scrollDown(skillsSection)}>SKILLS</button>
        <button onClick={() => scrollDown(aboutSection)}>ABOUT</button>
        <button onClick={() => scrollDown(contactSection)}>CONTACT</button>
      </nav>
      <div ref={projectsSection}><Slideshow /></div>
      <div ref={skillsSection}><Skills /></div>
      <div ref={aboutSection}><About /></div>
      <div ref={contactSection}><Contact /></div>
    </div>
  );
}

export default App;
