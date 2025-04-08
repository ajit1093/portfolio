import React from "react";
import "./Project.scss";
import massage from "../../assets/shriKrishnaArogyam.jpg";
import portfolio from"../../assets/portfolio.png";
import NebulaTechnology from"../../assets/NebulaTechnology.png";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and SCSS showcasing my skills, projects, and contact info.",
    link: "#",
    image: portfolio,
  },
  {
    title: "ShriKrishnaArogyam – Wellness Website",
    description: "A clean and calming website built for a massage therapy center to showcase their services, promote health and wellness, and enable client inquiries.",
    link: "https://www.shrikrishnaarogyammassagetherapy.com/",
    image: massage // ✅ Updated image path
  },
  {
    title: "ERP System - Nebula Technology",
    description: " A custom-built ERP platform developed for Nebula Technology to manage internal operations like HR,inventory, billing, and reporting with role-based access and real-time dashboards.",
    link: "https://nebula-technology.com/",
    image: NebulaTechnology,
  },
];

      

const Project = () => {
  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="projects-grid">
  {projects.map((project, index) => (
    <div className="project-card" key={index}>
      <img src={project.image} alt={project.title} className="project-image" />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Project;
