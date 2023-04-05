import './styling/NavBar.css';
import { scrollDown } from '../App/helpers';
import Slideshow from '../Slideshow/Slideshow';

function NavBar() {
  return (
    <nav id="NavBar">
        <button onClick={() => scrollDown(Landing)}>Landing</button>
        <button onClick={() => scrollDown(Slideshow)}>Projects</button>
        <button onClick={() => scrollDown(Skills)}>Skills</button>
        <button onClick={() => scrollDown(About)}>About</button>
        <button onClick={() => scrollDown(Contact)}>Contact</button>
    </nav>
  );
}

export default NavBar;
