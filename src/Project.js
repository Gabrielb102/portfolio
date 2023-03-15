import './styling/Project.css';
// const pc = {
//     title : 'Poll-itically Correct',
//     thumbnailUrl : './static/PC-thumbnail.png' ,
//     short : pcShort,
//     long : pcLong,
//     gitHubUrl : 'https://github.com/gabrielb102/pollitically-correct'
// }

function Project(proj) {
    console.log("proj: ", proj);
    return (
        <div className='Project'>
            <h3 className='Project-title'> { proj.proj.title }</h3>
            <img className='Project-image' src={proj.proj.thumbnailUrl}/>
            <p className='Project-short'>{ proj.proj.short }</p>
        </div>
    );
}

export default Project;