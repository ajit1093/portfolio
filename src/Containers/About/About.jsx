import React from 'react';
import './About.scss';

import about from"../../assets/ajitnew.jpg";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="profile-section">
        <div className="profile-image">
          <img src={about} alt="Ajit Shirish Babar" />
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
          <a href="https://github.com/ajit1093" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ajit-babar-241353301/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/babar_ajit_1093/profilecard/?igsh=YTdtZ2hrYzZ2ODB3" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
