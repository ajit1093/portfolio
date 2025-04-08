import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons
import './Footer.scss'; // Import SCSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Ajit Babar. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/ajit-babar-241353301/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://github.com/ajit1093"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="https://x.com/ajitbabar1093?t=yY0n_yAF18iURgntyizOtg&s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/babar_ajit_1093/profilecard/?igsh=YTdtZ2hrYzZ2ODB3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;