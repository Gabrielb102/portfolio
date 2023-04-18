import './Landing.css';
import ResThumbnail from '../static/ResThumbnail.png';
import { useState } from 'react';

function Landing() {

  let resume;

  const button = (
    <button onClick={() => setRes(resume)}>
      <div className='card w-36 text-center bg-accent align-middle'>
        <figure ><img src={ ResThumbnail } alt=''/></figure>
        <div className='card-body p-0'>
          <h4 className='card-text'>Preview Resume</h4>
        </div>
      </div>
    </button>);

  resume = (
    <>
      <div className='m4 duration-150'>
        <a className='btn btn-sm m-4 font-light' href='https://docs.google.com/document/d/19aQs8I04aUz4b3eaeNlMkGxtdeboOifgQ4GoqdUqW3w/export?format=pdf'>DOWNLOAD</a>
        <button className='btn btn-sm font-light' onClick={() => setRes(button)}>CLOSE</button>
      </div>
      <iframe title='Resume' src={ process.env.PUBLIC_URL + '/Burgos\ Resume\ SWE\ 2023.pdf#toolbar=0&navpanes=0&scrollbar=0'}></iframe>
    </>
  );

  const [res, setRes] = useState(button);

  return (
    <div className='flex p-24 h-full'>
        <div className='basis-128'>
          <h1 className='text-7xl font-thin'>Gabriel Burgos</h1>
          <h4 className='text-2xl'>Full-Stack Developer</h4>
        </div>
        <div className='basis-64'>
          { res }
        </div>
    </div>
  );
}

export default Landing;
