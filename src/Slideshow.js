import './styling/Slideshow.css';
import {pc, cot, rand} from './ProjectsContent';
import Project from './Project';
import { v4 as uuidv4 } from 'uuid';

function Slideshow() {
    const projects = [pc, cot, rand];
    const projComps = [];

    for (let proj of projects) {
        projComps.push(<Project key={ uuidv4() } proj={ proj } />)
    }

    return (
        <div id='Slideshow'>
            <h2>PROJECTS</h2>
            <ul>{projComps}</ul>
        </div>
    );
}

export default Slideshow;