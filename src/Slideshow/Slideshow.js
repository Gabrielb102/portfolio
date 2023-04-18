import { projects } from './ProjectsContent';
import Project from './Project';
import { v4 as uuidv4 } from 'uuid';

function Slideshow() {
    const projComps = [];

    for (let i = 0; i < projects.length; i++) {
        projComps.push(<div className='carousel-item p-4'><Project key={uuidv4()} proj={projects[i]} /></div>);
    }
    
    return (
        <div className='pt-24'>
            <h2 className='text-center'>PROJECTS</h2>
            <div className='carousel'>{projComps}</div>
        </div>
    );
}

export default Slideshow;