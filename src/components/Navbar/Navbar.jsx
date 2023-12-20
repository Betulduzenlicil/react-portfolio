import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
  return (
    <div >
      <ul className="d-flex justify-content-between " style={{listStyleType:"none"}}>
        <li className="me-3" >
          {" "}
          <NavLink to="/" >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT ME</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/projects">PROJECTS</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
