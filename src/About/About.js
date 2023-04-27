import turt from '../static/Turtleneck-blue.png'

function About() {
    return (
        <div className='pt-24 m-16'>
            <h2 className='ml-8 font-thin'>ABOUT</h2>
            <div id='About' className='flex h-fit-content rounded-xl'>
                <div className='pl-8'>
                    <h4 className='font-light pt-8'>MOTIVATION</h4>
                    <p>I'm a creative and dilligent software developer with a background in Neuroscience. I'm passionate about finding out how things work, and finding how they can work differently. My projects revolve around empowering others, which so far I’ve accomplished through education with data visualization.</p>
                    <h4 className='font-light pt-4'>TECH</h4>
                    <p>As far as technologies go, I'm well-versed in JavaScript, React, HTML, and CSS in the front end, and Node.js, Express, PostgreSQL, and Redis in the back-end, and the rest of the comprehensive list is in the 'Skills' section. The new technologies coming out daily are very promising, and my favorite part of starting a new project is finding which new tools have come out since the last project, and how I can utilize them for the next one.</p>
                    <h4 className='font-light pt-4'>WORK</h4>
                    <p>Working with others is how we make big things happen (teamwork makes the dream work, right?) and I treasure the opportunity to help people realize a vision that may be just out of reach. If you're looking for a developer to grow your business into something more, I'm always happy to talk and see what can happen. Contact me with the form below!</p>
                </div>
                <div className='About me'>
                    <img src={turt} className='scale-75' alt="Me" />
                </div>
            </div>
        </div>
    )
}

export default About;