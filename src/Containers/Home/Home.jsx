import React from 'react';
import './home.scss'; // Import the SCSS file
import { useNavigate } from 'react-router-dom';
import { FaFileDownload, FaEnvelope, FaAngular  } from 'react-icons/fa';

const Home = () => {
    const navigate=useNavigate();

    const GoToSkills=()=>{
        navigate("/skills")
    }
    const GoToContact=()=>{
        navigate("/contact")
    }
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Ajit Babar</h1>
          <h2>Frontend Developer</h2>
          <h3>
            I specialize in building modern, responsive, and user-friendly web applications.
            Let's create something amazing together!
          </h3>
          <div className="cta-buttons">
          <a href="/resume.pdf" download="Ajit_Resume.pdf">
            <button className='cta-button outline'> <FaFileDownload style={{"marginRight":"2px"}}/> My Resume</button>
          </a>
            
            <button onClick={GoToContact} className='cta-button outline'> <FaEnvelope style={{"marginRight":"10px"}}/>Get in Touch</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/ajit.jpg" alt="Your Name" />
        </div>
      </section>
    </main>
  );
};

export default Home;