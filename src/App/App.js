import './App.css';
import Landing from '../Landing Page/Landing';
import Slideshow from '../Slideshow/Slideshow';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { useRef } from 'react';
import { scrollDown } from './helpers';

function App() {
  const landingSection = useRef(null);
  const projectsSection = useRef(null);
  const skillsSection = useRef(null);
  const aboutSection = useRef(null);
  const contactSection = useRef(null);

  return (
    <div className='background'>
      <div className='foreground h-[485px]' ref={landingSection}><Landing /></div>
        <nav className='foreground navbar-center sticky top-12 z-10 bg-white p-1 mx-24 mt-20 rounded-lg'>
          <button className='btn btn-sm btn-ghost mx-1 active:bg-primary font-light' onClick={() => scrollDown(landingSection)}>LANDING PAGE</button>
          <button className='btn btn-sm btn-ghost mx-1 active:bg-primary font-light' onClick={() => scrollDown(projectsSection)}>PROJECTS</button>
          <button className='btn btn-sm btn-ghost mx-1 active:bg-primary font-light' onClick={() => scrollDown(skillsSection)}>SKILLS</button>
          <button className='btn btn-sm btn-ghost mx-1 active:bg-primary font-light' onClick={() => scrollDown(aboutSection)}>ABOUT</button>
          <button className='btn btn-sm btn-ghost mx-1 active:bg-primary font-light' onClick={() => scrollDown(contactSection)}>CONTACT</button>
        </nav>
      <div className='foreground' ref={projectsSection}><Slideshow /></div>
      <div className='foreground' ref={skillsSection}><Skills /></div>
      <div className='foreground' ref={aboutSection}><About /></div>
      <div className='foreground' ref={contactSection}><Contact /></div>
    </div>
  );
}

export default App;
