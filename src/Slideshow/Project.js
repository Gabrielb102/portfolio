import { useState } from 'react';
import './Project.css';
// const pc = {
//     title : 'Poll-itically Correct',
//     thumbnailUrl : './static/PC-thumbnail.png' ,
//     short : pcShort,
//     long : pcLong,
//     gitHubUrl : 'https://github.com/gabrielb102/pollitically-correct'
// }

function Project({ proj }) {

    let long;

    let short = (    
        <div className='Project' onClick={() => setContent(long)}>
            <h3 className='Project-title'> { proj.title }</h3>
            <img className='Project-image' src={proj.thumbnailUrl}/>
            <p className='Project-short'>{ proj.short }</p>
        </div>
    );

    long = (
        <div className='Project expanded' onClick={() => setContent(short)}>
            <h3 className='Project-title'> { proj.title }</h3>
            <img className='Project-image large' src={proj.thumbnailUrl}/>
            <p className='Project-long'>{ proj.long }</p>
            <a href={ proj.gitHubUrl }>GitHub</a>
        </div>
    )

    const [content, setContent] = useState(short);


    return (
        <>
        { content }
        </>
    );
}

export default Project;