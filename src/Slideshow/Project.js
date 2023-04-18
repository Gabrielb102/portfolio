import { useState } from 'react';
import './Project.css';
// const pc = {
//     title : 'Poll-itically Correct',
//     thumbnailUrl : './static/PC-thumbnail.png' ,
//     short : pcShort,
//     long : pcLong,
//     gitHubUrl : 'https://github.com/gabrielb102/pollitically-correct'
// }

const Project = ({ proj, pid }) => {
  console.log('pid: ', pid);



  const switchModes = (mode, pid) => {
    const card = document.querySelector(`#${pid}`)
    card.classList.toggle('small')
    card.classList.toggle('large')
    setContent(mode);

  }

  let long;

  let short = (    
      <>
          <figure>
              <img src={proj.thumbnailUrl} alt=''/>
          </figure>
          <div className='card-body'>
              <h3 className='card-title'> { proj.title }</h3>
              <p className='card-text'>{ proj.short }</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-primary" onClick={() => switchModes(long, pid)}>👀</button>
              </div>
          </div>
      </>
  );

  long = (
      <>
        <figure>
          <img src={proj.thumbnailUrl} alt=''/>
        </figure>
        <div className='card-body'>
          <h3 className='card-title'> { proj.title }</h3>
          <p>{ proj.long }</p>
          <a href={ proj.gitHubUrl }>GitHub</a>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-primary" onClick={() => switchModes(short, pid)}>close</button>
          </div>
        </div>
      </>
  )

  const [content, setContent] = useState(short);


  return (
    <div id={pid} className='card-normal w-80 h-96 max-h-96 bg-base-100 shadow-xl ease-in-out small'>
      { content }
    </div>
  );
}

export default Project;