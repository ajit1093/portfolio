import React from 'react';
import './Home.scss';
import { useNavigate } from 'react-router-dom';
import { FaFileDownload, FaEnvelope } from 'react-icons/fa';
import AjitImage from '../../assets/ajit.jpg';

const Home = () => {
  const navigate = useNavigate();

  const GoToSkills = () => {
    navigate("/skills");
  };
  const GoToContact = () => {
    navigate("/contact");
  };

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Hello, I'm Ajit Babar</h1>
          <h2>Frontend Developer</h2>
          <h3>
            Crafting beautiful and functional user experiences with modern web
            technologies..
          </h3>
          <div className="cta-buttons">
            <a href="/Ajit_resume (3).pdf" download="Ajit_resume(3).pdf">
              <button className='cta-button outline'>
                <FaFileDownload style={{ marginRight: "8px" }} /> Resume
              </button>
            </a>
            <button onClick={GoToContact} className='cta-button'>
              <FaEnvelope style={{ marginRight: "8px" }} /> Contact Me
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={AjitImage} alt="Ajit" />
        </div>
      </section>
    </main>
  );
};

export default Home;
