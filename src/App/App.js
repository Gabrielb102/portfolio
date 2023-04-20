import './App.css';
import Landing from '../Landing Page/Landing';
import Slideshow from '../Slideshow/Slideshow';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { useRef, createContext } from 'react';
import { scrollDown } from './helpers';

function App() {
  const landingSection = useRef(null);
  const projectsSection = useRef(null);
  const skillsSection = useRef(null);
  const aboutSection = useRef(null);
  const contactSection = useRef(null);

  const ScrollContext = createContext();

  return (
    <div className='background'>
      <div className='foreground h-[85vh]' ref={landingSection}><Landing /></div>
        <nav className='foreground navbar-center sticky top-10 z-10 bg-white p-1 mx-24 mt-18 rounded-lg'>
          <div className='mx-32'>
            <button className='btn btn-sm btn-ghost hover:btn-outline mx-1 active:bg-primary font-light' onClick={() => scrollDown(landingSection)}>LANDING PAGE</button>
            <button className='btn btn-sm btn-ghost hover:btn-outline mx-1 active:bg-primary font-light' onClick={() => scrollDown(projectsSection)}>PROJECTS</button>
            <button className='btn btn-sm btn-ghost hover:btn-outline mx-1 active:bg-primary font-light' onClick={() => scrollDown(skillsSection)}>SKILLS</button>
            <button className='btn btn-sm btn-ghost hover:btn-outline mx-1 active:bg-primary font-light' onClick={() => scrollDown(aboutSection)}>ABOUT</button>
            <button className='btn btn-sm btn-ghost hover:btn-outline mx-1 active:bg-primary font-light' onClick={() => scrollDown(contactSection)}>CONTACT</button>
            <button className='btn btn-sm btn-ghost hover:btn-outline mx-1 active:bg-primary font-light' >
              <a href='https://docs.google.com/document/d/19aQs8I04aUz4b3eaeNlMkGxtdeboOifgQ4GoqdUqW3w/export?format=pdf'>
                <p>Download Resume</p>
              </a>
            </button>
          </div>
        </nav>
      <ScrollContext.Provider value={ projectsSection }>
        <div className='foreground' id='Slideshow' ref={projectsSection}><Slideshow /></div>
      </ScrollContext.Provider>
      <div className='foreground' ref={skillsSection}><Skills /></div>
      <div className='foreground' ref={aboutSection}><About /></div>
      <div className='foreground' ref={contactSection}><Contact /></div>
    </div>
  );
}

export default App;
