import React from 'react';
import './About.scss';
// import virat from '../src/assets/8393536.jpg'
const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="profile-image">
        <img src="/ajit.jpg" alt="Ajit Shirish Babar" />
      </div>
      <h1>About Me</h1>
      <p>
        Hi, I'm <strong>Ajit Shirish Babar</strong>, a passionate and driven <strong>BTech CSE student</strong> with a strong interest in building modern, user-friendly web applications. I am currently working as a <strong>Frontend Developer Intern</strong> at <strong>Nebula Technology, Pune</strong>, where I am honing my skills in frontend technologies like <strong>HTML, CSS, JavaScript, and React</strong>.
      </p>
      <p>
        My journey in web development began with a curiosity for creating visually appealing and functional interfaces. Over time, I have developed a solid foundation in frontend development, enabling me to build responsive and dynamic websites. I enjoy turning complex problems into simple, intuitive, and engaging user experiences.
      </p>
      <p>
        At Nebula Technology, I am actively contributing to real-world projects, collaborating with teams, and learning industry best practices. This experience has not only strengthened my technical skills but also improved my ability to work in a professional environment.
      </p>
      <p>
        When I'm not coding, I love exploring new technologies, contributing to open-source projects, and staying updated with the latest trends in web development. I am always eager to learn and grow, and I am excited about the opportunities that lie ahead in my career.
      </p>
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>
  );
};

export default AboutMe;