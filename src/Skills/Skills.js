import SkillIcon from './SkillIcon';
import { javasript, react, python, node, express, flask, html, css, postgresql, bcrypt, jwt, sequelize, leaflet, d3, redis } from './skillIcons/comprehensiveSkills';
import './Skills.css';

const skills = [javasript, react, python, node, express, flask, html, css, postgresql]
const otherSkills = [bcrypt, jwt, sequelize, leaflet, d3, redis]

function Skills() {

    const switchPanels = (cls) => {
        const panels = document.querySelectorAll(`.${cls}`)
        panels.forEach(panel => panel.classList.toggle('hidden'))
    }

    return (
        <div className='pt-32'>        
            <h2 className='font-thin text-center'>SKILLS</h2>
            <div className='flex flex-row px-16'>
                <div className='basis-1/2 p-8'>
                    <div className='skills bg-white/[.8] rounded-xl p-4 h-[250px] text-center align-middle ease-in-out duration-200' onClick={() => switchPanels('foundational')}>
                        <h3 className='font-thin'>MAIN TECHNOLOGIES / FRAMEWORKS</h3>
                        <div className='foundational'>
                            { skills.map((skill, i) => <SkillIcon key={i} imgSrc={skill} />) }
                        </div>
                        <div className='hidden foundational'>
                            <p className='font-light'>Usually I like to start with a pen and paper to plan out the database schema and the necessary building blocks for the front and back end. While I only practice OOP with React, I'm always eager to learn and get accustomed to using a more foundational Object-Oriented Language like C or C#. Testing is commonplace and considered necessary for my apps, and TDD makes it easy to set up a robust back-end.</p>
                        </div>
                    </div>
                </div>
                <div className='basis-1/2 p-8'>
                    <div className='skills bg-white/[.8] rounded-xl p-4 h-[250px] text-center ease-in-out duration-200' onClick={() => switchPanels('misc')}>
                        <h3 className='font-thin'> OTHER RANDOM TECHNOLOGIES </h3>
                        <div className='misc'>
                            { otherSkills.map((skill, i) => <SkillIcon key={i} imgSrc={skill} />) }
                        </div>
                        <div className='hidden misc'>
                            <p className='font-light'>In most new projects, if it's new enough, I'll hit a boundary of my knowledge. Researching and finding the right tool for the job is what I consider one of the biggest keys to growth as a software engineer. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;