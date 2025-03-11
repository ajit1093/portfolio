import React from 'react';
import './Skills.scss';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt,FaJava } from 'react-icons/fa';
import { SiMysql } from "react-icons/si";

const Skills = () => {

  const skills = [
    { name: 'HTML', description: 'Proficient in building structured and semantic web pages.', icon: <FaHtml5 /> },
    { name: 'CSS', description: 'Skilled in styling and creating responsive designs.', icon: <FaCss3Alt /> },
    { name: 'JavaScript', description: 'Experienced in building interactive and dynamic web applications.', icon: <FaJs /> },
    { name: 'React', description: 'Proficient in developing modern, component-based UIs.', icon: <FaReact /> },
    { name: 'Git', description: 'Skilled in version control and collaborative development.', icon: <FaGitAlt /> },
    { name: 'Java', description:'Skilled in Java programming with expertise in building robust, high-performance applications.',icon:<FaJava/>},
    { name: 'SQL' , description: 'Skilled in SQL for database management, querying, and data analysis.',icon:<SiMysql size={50}/>},
    
  ];

  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h1>{skill.icon}</h1>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;