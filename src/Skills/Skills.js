import './Skills.css'
import ReactMarkdown from 'react-markdown';

function Skills() {
    return (
        <div id="Skills">
            <h2>SKILLS</h2>
            <ReactMarkdown>#### Front-end</ReactMarkdown>
            <ReactMarkdown>
                -JavaScript
                -React
                -HTML
                -CSS
            </ReactMarkdown>
            <ReactMarkdown>#### Back-end</ReactMarkdown>
            <ReactMarkdown>
                -Node.js
                -Express
                -Python
                -Flask
                -PostgreSQL
                -Redis
            </ReactMarkdown>
            <ReactMarkdown>#### Other Random Technologies</ReactMarkdown>
            <ReactMarkdown>
                -Bcrypt
                -jwt
                -ORMs (Sequelize, pg)
                -Leaflet.js
                -D3.js
            </ReactMarkdown>

        </div>
    );
}

export default Skills;