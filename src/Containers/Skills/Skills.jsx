import React from 'react';
import './Skills.scss';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiMysql, SiRedux } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: 'HTML', description: 'Proficient in building structured and semantic web pages.', icon: <FaHtml5 /> },
    { name: 'CSS', description: 'Skilled in styling and creating responsive designs.', icon: <FaCss3Alt /> },
    { name: 'JavaScript', description: 'Experienced in building interactive and dynamic web applications.', icon: <FaJs /> },
    { name: 'React', description: 'Proficient in developing modern, component-based UIs.', icon: <FaReact /> },
    { name: 'React Router', description: 'Skilled in creating multi-page SPA navigation using React Router.', icon: <FaReact /> },
    { name: 'Redux', description: 'Efficient at managing global state in large-scale React apps.', icon: <SiRedux /> },
    { name: 'Java', description: 'Capable of developing robust, scalable backend solutions.', icon: <FaJava /> },
    { name: 'Hibernate', description: 'Experienced in ORM for database interaction in Java applications.', icon: <FaJava /> },
    { name: 'SQL', description: 'Proficient in querying, managing, and analyzing relational databases.', icon: <SiMysql /> },
    { name: 'Git', description: 'Experienced in version control and collaboration using Git.', icon: <FaGitAlt /> },
    { name: 'Bootstrap', description: 'Skilled in rapid UI development using Bootstrap components.', icon: <FaCss3Alt /> },
    { name: 'Tailwind CSS', description: 'Efficient in building utility-first responsive designs.', icon: <FaCss3Alt /> }
  ];
  

  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
