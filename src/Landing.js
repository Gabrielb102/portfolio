import './styling/Landing.css';
import ResThumbnail from './static/ResThumbnail.png';

const resume = '<iframe src="https://docs.google.com/document/d/e/2PACX-1vTl0bs0kVJd5RXVYdbtLVgz7r76Ef8a-Wp7he6LOuacbxuYg6qzY9hKjGiu5xQR81yByvGdqOKA6ukh/pub?embedded=true"></iframe>';

const displayResume = () => {
  const resumeDiv = document.querySelector('#Landing-resume');
  resumeDiv.innerHTML = resume;
}


function Landing() {
  return (
    <div id="Landing">
        <h1 id='Landing-name'>Gabriel Burgos</h1>
        <h4 id='Landing-title'>Full-Stack Developer</h4>
        <div id='Landing-resume'>
          <button id='Landing-button' onClick={displayResume}>
            <img src={ ResThumbnail }/>
            <h5>Resume_Preview</h5>
          </button>
        </div>
        <p id='Landing-bio'> Software engineer with a background in neuroscience. Skilled in front and back-end design. Adept at researching and implementing frameworks for use in novel projects. Always hungry to learn something new or make something work. Fluent in Spanish and English.</p>
    </div>
  );
}

export default Landing;
