import SkillIcon from '../Skills/SkillIcon';
import me from '../static/floating-coffee.png';
import { javasript, react, python, node, postgresql } from '../Skills/skillIcons/comprehensiveSkills';

const skills = [javasript, react, python, node, postgresql];

function Landing() {

  return (
    <div id='Landing' className='relative flex px-24 pt-24 h-full'>
      <div className='basis-2/3'>
        <h1 className='text-7xl font-thin'>Gabriel Burgos</h1>
        <h4 className='text-2xl font-thin ml-1'>Full-Stack Developer</h4>
        <div className='absolute bottom-10'>
          {skills.map((skill, i) => <SkillIcon className='align-bottom' key={i} imgSrc={skill} />)}
        </div>
      </div>
      <div className='basis-1/3'>
        <img src={me} alt='me, who do you think'/>
      </div>
    </div>
  );
}

export default Landing;

