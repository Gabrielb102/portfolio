import './Landing.css';
import ResThumbnail from '../static/ResThumbnail.png';
import { useState } from 'react';

function Landing() {

  let resume;

  const button = (
    <button id='Landing-button' onClick={() => setRes(resume)}>
      <img src={ ResThumbnail }/>
      <h5>Resume_Preview</h5>
    </button>);

  resume = (
    <>
      <div id='Landing-res-buttons'>
        <a href='https://docs.google.com/document/d/19aQs8I04aUz4b3eaeNlMkGxtdeboOifgQ4GoqdUqW3w/export?format=pdf'>DOWNLOAD</a>
        <button onClick={() => setRes(button)}>CLOSE</button>
      </div>
      <iframe src={ process.env.PUBLIC_URL + '/Burgos\ Resume\ SWE\ 2023.pdf#toolbar=0&navpanes=0&scrollbar=0'}></iframe>
    </>
  );

  const [res, setRes] = useState(button);

  return (
    <div id="Landing">
        <div id='Landing-info'>
          <h1 id='Landing-name'>Gabriel Burgos</h1>
          <h4 id='Landing-title'>Full-Stack Developer</h4>
        </div>
        <div id='Landing-resume'>
          { res }
        </div>
    </div>
  );
}

export default Landing;
