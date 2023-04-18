import SkillIcon from './SkillIcon';
import javasript from './skillIcons/js-icon.png'
import react from './skillIcons/react-icon.png'
import node from './skillIcons/node-icon.png'
import python from './skillIcons/python-icon.png'
import express from './skillIcons/express-icon.png'
import flask from './skillIcons/flask-icon.png'
import html from './skillIcons/html-icon.png'
import css from './skillIcons/css-icon.png'
import postgresql from './skillIcons/postgresql-icon.png'
import jwt from './skillIcons/jwt-icon.png'
import bcrypt from './skillIcons/bcrypt-icon.svg'
import leaflet from './skillIcons/leaflet-icon.png'
import d3 from './skillIcons/d3-icon.png'
import redis from './skillIcons/redis-icon.png'
import sequelize from './skillIcons/sequelize-icon.png'

const skills = [javasript, react, python, node, express, flask, html, css, postgresql]
const otherSkills = [bcrypt, jwt, sequelize, leaflet, d3, redis]

function Skills() {
    return (
        <div className='pt-32'>        
            <h2 className='ml-16'>SKILLS</h2>
            <div className='mx-16 bg-white/[.8] rounded-xl p-8'>
                <h3>Main Technologies / Frameworks</h3>
                { skills.map((skill, i) => <SkillIcon key={i} imgSrc={skill} />) }
                <h3> Other Random Technologies</h3>
                { otherSkills.map((skill, i) => <SkillIcon key={i} imgSrc={skill} />) }

            </div>
        </div>
    );
}

export default Skills;