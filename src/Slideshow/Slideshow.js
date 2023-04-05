import './Slideshow.css';
import { projects } from './ProjectsContent';
import Project from './Project';
import { v4 as uuidv4 } from 'uuid';

function Slideshow() {
    const projComps = [];
    
    function scroll(dir) {
        const container = document.querySelector('.Slideshow-container');
        const width = container.clientWidth;
        const scroll = dir === 'next' ? width : -width;
        container.scrollBy(scroll, 0);
    }

    for (let i = 0; i < projects.length; i++) {
        projComps.push(<Project key={uuidv4()} proj={projects[i]} />);
    }
    
    return (
        <div id='Slideshow'>
            <h2>PROJECTS</h2>
            <button className='Slideshow-arrow' id='prev' onClick={() => scroll('prev')}>&lt;</button>
            <div className='Slideshow-container'>{projComps}</div>
            <button className='Slideshow-arrow' id='next' onClick={() => scroll('next')}>&gt;</button>
        </div>
    );
}

export default Slideshow;