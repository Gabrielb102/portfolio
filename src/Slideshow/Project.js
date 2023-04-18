import { useState } from 'react';
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
        <div className='card-normal w-80 h-96 max-h-96 bg-base-100 shadow-xl' onClick={() => setContent(long)}>
            <figure>
                <img src={proj.thumbnailUrl} alt=''/>
            </figure>
            <div className='card-body'>
                <h3 className='card-title'> { proj.title }</h3>
                <p className='card-text'>{ proj.short }</p>
            </div>
        </div>
    );

    long = (
        <div className='card-normal w-8/12 h-[200px] max-h-full bg-base-100 shadow-xl' onClick={() => setContent(short)}>
          <figure>
            <img src={proj.thumbnailUrl} alt=''/>
          </figure>
          <div className='card-body'>
            <h3 className='card-title'> { proj.title }</h3>
            <p>{ proj.long }</p>
            <a href={ proj.gitHubUrl }>GitHub</a>
          </div>
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