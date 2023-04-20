import './Project.css';
// const pc = {
//     title : 'Poll-itically Correct',
//     thumbnailUrl : './static/PC-thumbnail.png' ,
//     short : pcShort,
//     long : pcLong,
//     gitHubUrl : 'https://github.com/gabrielb102/pollitically-correct'
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

  return (
    <div id={pid} onClick={() => switchModes(pid)} className='card-normal w-80 h-[400px] bg-white/[.7] shadow-xl ease-in-out duration-300 hover:cursor-pointer small'>
      <figure>
        <img src={proj.thumbnailUrl} alt=''/>
      </figure>
      <div className='card-body relative'>
          <h3 className='card-title'> { proj.title }</h3>
          <p className='card-text font-light text-ellipsis overflow-hidden ...'>{ proj.long }</p>
      </div>
    </div>
  );
}

export default Project;