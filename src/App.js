import './styling/App.css';
import Landing from './Landing';
import Slideshow from './Slideshow';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <header className="App-header"></header> 
      <Landing />
      <Slideshow />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
