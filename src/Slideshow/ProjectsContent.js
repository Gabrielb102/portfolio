import comingSoon from '../static/coming-soon.png';
import pfloThumbnail from '../static/pflo-thumbnail.png';
import pcThumbnail from '../static/PC-thumbnail.png';
import cotThumbnail from '../static/COT-thumbnail.png';
import rjThumbnail from '../static/RJ-thumbnail.png';

const leukLong = (
    <>
        <p>The autoimmune diagnoses we need today instead of tomorrow. It is the norm for people with autoimmune (also referred to as rheumatic) conditions to be difficult to treat purely due to the difficulty for the patient to obtain a diagnosis.</p>
        <p>My colleague Ben Epperson and I are creating a tool which doctors can utilize reduce the impact of rheumatic diseases on their patients’ lives. </p>
        <p>Currently, we are developing the base product, with the back-end API, admin portal, practitioner portal, and public website coming soon. More details are also forthcoming as we formally establish..</p>
    </>
)

const huzzLong = (
    <>
        <p>Magic away customer service issues. Huzzah! Is an ambitious customer service platform being created in collaboration between myself and my good friend Malachi Walton. After working in the industry for several years he’s found a severe need for a new customer service platform that performs at the level of todays technological standards. </p>
        <p>Our primary goals are to have:</p>
        <li>Screen-in-screen functionality</li>
        <li>Tags for our tickets</li>
        <li>Integration with other company systems - to essentially become a company management tool</li>
        <li>Streamlined UX for internal customer service representatives</li>
        <li>fun</li>
        <p>I've just developed the barebones customer service representative facing app so far, next is the portal for the help-seeker, the tickets, then the screen-in-screen feature.</p>
    </>
)

const pfloLong = (
    <>
        <p>Creating this portfolio tested my front-end development skills and led me to solutions I’m thrilled to have found. Finding inspiration online in different css example libraries and also actual styling libraries was eye-opening. This was more about the design than anything else.</p>
        <p>After going straight into coding vanilla css and spending several hours not doing much at all, I redirected my efforts to researching trendy styles and helpful libraries, and eventually came upon neomorphism as a style, and Daisy and Tailwind css as the simple styling libraries that would save me the time of styling every component on the page, and the vanilla css helped with doing the neomorphic style. After setting this up, I look forward to doing more front-end work and experimenting with other styles and css tricks.</p>
    </>
)

const pcLong = (
    <>
        <p>Check political campaign donations for your favorite politician!</p>
        <p>If you've ever been confused about the statements or legislative decisions made by a particular politician, this app may lead you to the answer. </p>
        <p>Pollitically Correct allows you to search for any political candidate in recent American History, and then reveals the top contributors to any of their political campaigns. Candidates can be searched by name, political party, election year, state, and congressional district, and candidates and even particular elections can be added to a user’s favorites so you can revisit them later!</p>
        <p>After selecting a candidate and election year, the app will display the committees associated with that election, and the total funds associated with the candidate. The top ten donors are listed below that, and the total amount donated to the candidate's associated committees. Following the top ten donors, there's a pie chart which lists the types of entities the donors were. As an individual, their occupation is described, and all companies and organizations are grouped in a bucket category. The app gathers and displays data from the Federal Election Committee's Open API, so the data is limited only by the years the FEC decided to begin recording financial election data. </p>
        <p>This project was a full-stack JavaScript application, with Node.js and Express making up the back-end, and React and CSS making up most of the front-end. Here I used Redis for caching to speed up the data retrieval, and found it just as easy to use as requests-cache, although much more powerful and with a broader range of use. If I were to go back to improve this project, I would add a commenting feature and a prettier and more informative data screen, as well as info bubbles about financial election data in general.</p>
        <p>Federal election law is complex, and it’s made more convoluted by every player’s different tendencies - all couple thousand of them. To start, every donor and election committee records data differently. Some donors record donations as granular as individual dinners paid for, and others report lump sums of large uneven amounts, and some donated under their own names, while other donated as their companies instead. The data can still be found, it would just take some personal digging that over thousands of donors, is humanly impossible and I’ll have to find a way to automate as the results are viewed. One idea was to have the wikipedia search for the company or individual available next to the Donor’s name. According to the API as well, any entity that is not an individual is lumped into the “organization/institution” category, which is much less detail than is provided for the individuals. In addition, if a donor wants to hide their true loyalties, then they simply list their employers as their own LLCs, which they are technically employees of. </p>
        <p>Tech and politics don’t mix well, but I think with AI, this project could be improved dramatically. I made up for the shortcomings I could by summing the donations made by the same donor to the same committee, and summing the payments to different committees if they contributed to the same donor. The cherry on top is that federal election law changes more than Katy Perry changes her clothes. The maximums for certain different types of donations changes from cycle to cycle, causing substantial swings in election funding which are easy to misunderstand out of context. One year, a race may have low maximums for funding, and then be totally fueled by one large donor, which hides support for other groups.</p>
        <p>On the back-end, if I were to take another crack at this, I would take the donation data from the candidate-associated data, since that would specify how much they actually received. To clarify, candidates cannot directly receive donations according to the FEC, only committees can receive donations, including the candidates’ personal election committees as well as any other political committees (which aren’t that hard to file). Now, while it is logical to track the committee financials since they get all the money (and that’s the approach I took in this project), all the money doesn’t go to just one candidate most of the time (unless it is their principal election committee), and is instead disbursed to many candidates, so the data displayed shows the finances related to a certain election, not to mean that it was used by that election. Therefore this fix would treat an accuracy issue and ease understanding. </p>
    </>
)

const cotLong = (
    <>
        <p>It’s like NextDoor, but without the complaints about dog poop (😊) nor news about yard sales (😪). Crime Over Time lets the user see a map of the United States, and select either the whole country, a region, or a state. At that scale, the user can then search for the prevalence of a certain type of crime, and see data about the crime itself, including the motivations of the crime, the weapon used to commit it, and most importantly, in which areas the crime is most common represented as a heat map. Crime Over Time can also show victim data, such as what type of relationship they had with the perpetrator as well as their age and race. </p>
        <p>Crime Over Time sources it’s data from the FBI, who has made it available through their Crime Data Explorer API. The back-end is constructed with Python and Flask. To speed up the data retrieval and stay under the limit of API calls made, I used request-cache, a library I found which caches requests for external data with SQLite. This was new to me but it was remarkably easy to implement. If I were to continue to improve this project I would switch to Redis for improved scalability.</p>
        <p>The front-end was created with vanilla JavaScript, HTML, and CSS. The heatmap was created with the use of Leaflet.js, an open-source JS library which makes it easy for anyone to make any map for their app. I highly recommend it for it’s ease of use and customizability (I think I saw someone make a navigable map of westeros with it), and I’m sure the Ukranian developers behind it would appreciate some support. D3 is what I used for the pie chart, and it is a great data visualisation library I’ve used multiple times, and both times I haven’t scratched the surface of what it can do. If I were to go back to improve the front end I would read further into this to display more data at once for the user. </p>
        <p>Thanks for reading!</p>
    </>
)

const rjLong = (
    <>
        <p>Jobly is a LinkedIn clone created to put my new React skills to work. It was an assessment for the Springboard Software Development Bootcamp I completed, and it’s where I learned to really get comfortable with react. </p>
        <p>Simply enough, it utilizes node.js and Express in the back-end, and interacts with the user database using pg, which allows me to essentially write my own SQL queries. Pg is light and easy to use, and with the right data sanitation, SQL Injection isn’t a concern. However since I did have to write plenty of redundant code, I opted to use an ORM in future projects, since they take care of the data sanitation anyways, and result in less overall code in the back-end. </p>
    </>
);



const leuk = {
    title : '(Coming Soon) Leukosite',
    thumbnailUrl : comingSoon ,
    long : leukLong,
    tech : ['python'],
    gitHubUrl : ''
}

const huzz = {
    title : '(Coming Soon) Huzzah!',
    thumbnailUrl : comingSoon ,
    long : huzzLong,
    tech : ['react', 'chatEngine', 'express', 'node'],
    gitHubUrl : ''
}

const pflo = {
    title : 'This very portfolio',
    thumbnailUrl : pfloThumbnail ,
    long : pfloLong,
    tech : ['react', 'daisy', 'tailwind', 'css'],
    gitHubUrl : ''
}

const pc = {
    title : 'Poll-itically Correct',
    thumbnailUrl : pcThumbnail ,
    long : pcLong,
    tech :  ['node', 'react', 'express', 'postgresql', 'sequelize', 'redis', 'd3', 'axios', 'html', 'css'],
    gitHubUrl : 'https://github.com/gabrielb102/pollitically-correct'
}

const cot = {
    title : 'Crime Over Time',
    thumbnailUrl : cotThumbnail ,
    long : cotLong,
    tech : ['python', 'flask', 'javascript', 'leaflet', 'postgresql', 'sqlAlchemy', 'requestsCache', 'd3', 'axios', 'html', 'css'],
    gitHubUrl : 'https://github.com/gabrielb102/crime-over-time'
}

const jobly = {
    title : 'Jobly',
    thumbnailUrl : rjThumbnail ,
    long : rjLong,
    tech : ['node', 'express', 'postgresql', 'pg', 'axios', 'react', 'html', 'css'],
    gitHubUrl : 'https://github.com/gabrielb102/crime-over-time'
}

const projects = [leuk, huzz, pflo, pc, cot, jobly];
export { projects };