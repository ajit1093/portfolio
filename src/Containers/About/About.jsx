import React from 'react';
import './About.scss';
import AjitImage from "../../assets/ajit.jpg";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="profile-section">
        <div className="profile-image">
          <img src={AjitImage} alt="Ajit Shirish Babar" />
        </div>
        <h1>About Me</h1>
      </div>

      <div className="about-content">
        <p>
          Hi, I'm <strong>Ajit Shirish Babar</strong>, a passionate <strong>BTech CSE student</strong> and <strong>Frontend Developer Intern</strong> at <strong>Nebula Technology, Pune</strong>. I specialize in building modern, user-friendly web interfaces using <strong>HTML, CSS, JavaScript, and React</strong>.
        </p>
        <p>
          I love turning complex challenges into intuitive, engaging user experiences. My current role allows me to work on real-world projects and collaborate in a professional tech environment.
        </p>
        <p>
          Outside of coding, I enjoy exploring new technologies, contributing to open-source, and staying updated with the latest frontend trends.
        </p>

        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
