import { projects } from './ProjectsContent';
import Project from './Project';
import { v4 as uuidv4 } from 'uuid';

function Slideshow() {
    const projComps = [];

    for (let i = 0; i < projects.length; i++) {
        const id = `p${i}`;
        projComps.push(<div className='carousel-item p-4'><Project key={uuidv4()} proj={projects[i]} pid={id} /></div>);
    }
    
    return (
        <div className='pt-24'>
            <h2 className='text-center font-thin'>PROJECTS</h2>
            <div className='carousel carousel-center small-carousel overflow-y-visible h-fit py-4'>{projComps}</div>
        </div>
    );
}

export default Slideshow;