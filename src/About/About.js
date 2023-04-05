import './About.css'
import img from '../static/Me in scrubs.png'
import ReactMarkdown from 'react-markdown';

function About() {
    return (
        <div id="About">
            <h2>ABOUT</h2>
            <div className='flex'>
                <div className='About bio'>
                    <ReactMarkdown>#### Motivation</ReactMarkdown>
                    <ReactMarkdown>I'm a curious and dilligent software developer with a background in Neuroscience who passionate about reverse engineering problems to find solutions. I'm most passionate about using my front-end and back-end engineering skills to empower others, which is the general idea behind most of my projects.</ReactMarkdown>
                    <ReactMarkdown>#### Tech</ReactMarkdown>
                    <ReactMarkdown>As far as technologies go, I'm well-versed in JavaScript, React, HTML, and CSS in the front end, and Node.js, Express, PostgreSQL, and Redis in the back-end, and the rest of the comprehensive list is in the 'Skills' section. The new technologies coming out daily are very promising, and my favorite part of starting a new project is finding which new tools have come out since the last project, and how I can utilize them for the next one.</ReactMarkdown>
                    <ReactMarkdown>#### Work</ReactMarkdown>
                    <ReactMarkdown>Working with others is how we make big things happen (teamwork makes the dream work, right?) and I treasure the opportunity to help people realize a vision that may be just out of reach. If you're looking for a developer to grow your business into something more, I'm always happy to talk and see what can happen. Contact me with the form below!</ReactMarkdown>
                </div>
                <div className='About me'>
                    <img src={img} alt="Me" />
                    <ReactMarkdown>#### Background</ReactMarkdown>
                    <ReactMarkdown>I transitioned to software engineering from a medical career path to be able to have a wider impact over less time. As a doctor or researcher, change is slow to bring to medicine. As a software engineer I can introduce emerging technology into medicine to keep the practice as up to date as possible.</ReactMarkdown>
                    <ReactMarkdown>When my other projects aren't keeping me busy, I'm putting together a tool which improve diagnostics in Rheumatology, an underserviced field in dire need of an overhaul. I look forward to publishing the project as soon as my team and I submit the necessary patent.</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

export default About;