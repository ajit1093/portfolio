import React, { useState } from "react";
import { FaBars, FaReact, FaHome, FaUser, FaCode, FaAngular, FaEnvelope } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";

import { Link, useLocation } from "react-router-dom";
import { HiX } from "react-icons/hi";
import "./NavBar.scss";
import Logo from "../../assets/logo.png";

const data = [
  { label: "HOME", to: "/", logo: <FaHome size={20} /> },
  { label: "ABOUT ME", to: "/about", logo: <FaUser size={20} /> },
  { label: "SKILLS", to: "/skills", logo: <FaCode size={20} /> },
  {label: "PROJECTS", to:"/project",logo: <GrPersonalComputer size={20}/>},
  { label: "CONTACT", to: "/contact", logo: <FaEnvelope size={20} /> }
 
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const location=useLocation();
  const HandleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__container__logo">
        <img
  src={Logo}
  alt="logo"
  className="navbar__container__logo__img"
  style={{ height: "80px", width: "120px" }}
/>

        </Link>

        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
           <li key={key} className="navbar__container__menu__item">
           <Link
             className={`navbar__container__menu__item__links ${
               location.pathname === item.to ? "active-link" : ""
             }`}
             to={item.to}
           >
             {item.icon} {item.label}
           </Link>
         </li>
          ))}
        </ul>

        <div className="nav-icon" onClick={HandleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;