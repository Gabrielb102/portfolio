import './Project.css';
import tech from '../Skills/skillIcons/comprehensiveSkills.js';
import SmallIcon from '../Skills/SmallIcon'


// const pc = {
//   title : 'Poll-itically Correct',
//   thumbnailUrl : pcThumbnail ,
//   long : pcLong,
//   tech : ['Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'Redis', 'Axios', 'React', 'HTML', 'CSS', 'Axios', 'D3'],
//   gitHubUrl : 'https://github.com/gabrielb102/pollitically-correct'
// }

const Project = ({ proj, pid }) => {

  const switchModes = (pid) => {
    const card = document.querySelector(`#${pid}`)
    const existingLarges = document.querySelectorAll('.large')
    for (let biggie of existingLarges) {
      if (biggie !== card) {
        biggie.classList.toggle('small')
        biggie.classList.toggle('large')
      }
    }
    card.classList.toggle('small')
    card.classList.toggle('large')
  }

  const smallIcons = proj.tech.map((t, i) => {
    return <SmallIcon key={i} imgSrc={tech[t]} />
  })

  return (
    <div id={pid} onClick={() => switchModes(pid)} className='card-normal w-80 h-[400px] bg-white/[.7] shadow-xl duration-300 hover:cursor-pointer small'>
      <figure>
        <img src={proj.thumbnailUrl} alt=''/>
      </figure>
      <div className='card-body relative'>
          <h3 className='card-title'> { proj.title }</h3>
          <div className=''>{ smallIcons }</div>
          <div className='container overflow-hidden'>{ proj.long }</div>
      </div>
    </div>
  );
}

export default Project;