import React, { useState } from "react";
import { FaBars, FaReact, FaHome, FaUser, FaCode, FaAngular, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import "./NavBar.scss";

const data = [
  { label: "HOME", to: "/", logo: <FaHome size={20} /> },
  { label: "ABOUT ME", to: "/about", logo: <FaUser size={20} /> },
  { label: "SKILLS", to: "/skills", logo: <FaCode size={20} /> },
  { label: "CONTACT", to: "/contact", logo: <FaEnvelope size={20} /> },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const HandleToggleIcon = () => {
    console.log("Toggle icon clicked"); // Debugging
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__container__logo">
        <FaAngular size={50}/>
        </Link>
        

        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link className="navbar__container__menu__item__links" to={item.to}>
                {item.logo} {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="nav-icon" onClick={HandleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;