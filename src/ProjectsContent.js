import pcThumbnail from './static/PC-thumbnail.png';

const pcShort = "A web app written in Node.js and React that reveals the top donors to American political campaigns.";
const pcLong = `
    If you've ever been confused about the statements or legislative decisions made by a particular politician, this app may lead you to the answer. Pollitically Correct allows you to search for any political candidate in recent American History. Candidates can be searched by name, political party, election year, state, and congressional district. After selecting a candidate and election year, the app will display the committees associated with that election, and the total funds associated with them. The top ten donors, and the total amount donated to the candidate's associated committees. Following the top ten donors, there's a pie chart which lists the types of entities the donors were. As an individual, their occupation is described, and all companies and organizations are grouped in a bucket category. The app gathers and displays data from the Federal Election Committee's Open API, so the data is limited only by the years the FEC decided to begin recording financial election data.

    ### Technologies 

    ###### Node.js, Express, PostgreSQL, Sequelize, Redis, Axios
    ###### React, HTML, CSS, Axios, D3.js
`;

const pc = {
    title : 'Poll-itically Correct',
    thumbnailUrl : pcThumbnail ,
    short : pcShort,
    long : pcLong,
    gitHubUrl : 'https://github.com/gabrielb102/pollitically-correct'
}

const cotShort = "A web app written in Node.js and React that reveals the top donors to American political campaigns.";
const cotLong = `
    If you've ever been confused about the statements or legislative decisions made by a particular politician, this app may lead you to the answer. Pollitically Correct allows you to search for any political candidate in recent American History. Candidates can be searched by name, political party, election year, state, and congressional district. After selecting a candidate and election year, the app will display the committees associated with that election, and the total funds associated with them. The top ten donors, and the total amount donated to the candidate's associated committees. Following the top ten donors, there's a pie chart which lists the types of entities the donors were. As an individual, their occupation is described, and all companies and organizations are grouped in a bucket category. The app gathers and displays data from the Federal Election Committee's Open API, so the data is limited only by the years the FEC decided to begin recording financial election data.

    ### Technologies 

    ###### Node.js, Express, PostgreSQL, Sequelize, Redis, Axios
    ###### React, HTML, CSS, Axios, D3.js
`;

const cot = {
    title : 'Crime Over Time',
    thumbnailUrl : pcThumbnail ,
    short : cotShort,
    long : cotLong,
    gitHubUrl : 'https://github.com/gabrielb102/crime-over-time'
}

const randShort = "A web app written in Node.js and React that reveals the top donors to American political campaigns.";
const randLong = `
    If you've ever been confused about the statements or legislative decisions made by a particular politician, this app may lead you to the answer. Pollitically Correct allows you to search for any political candidate in recent American History. Candidates can be searched by name, political party, election year, state, and congressional district. After selecting a candidate and election year, the app will display the committees associated with that election, and the total funds associated with them. The top ten donors, and the total amount donated to the candidate's associated committees. Following the top ten donors, there's a pie chart which lists the types of entities the donors were. As an individual, their occupation is described, and all companies and organizations are grouped in a bucket category. The app gathers and displays data from the Federal Election Committee's Open API, so the data is limited only by the years the FEC decided to begin recording financial election data.

    ### Technologies 

    ###### Node.js, Express, PostgreSQL, Sequelize, Redis, Axios
    ###### React, HTML, CSS, Axios, D3.js
`;

const rand = {
    title : 'Other App',
    thumbnailUrl : pcThumbnail ,
    short : randShort,
    long : randLong,
    gitHubUrl : 'https://github.com/gabrielb102/crime-over-time'
}

export {pc, cot, rand};