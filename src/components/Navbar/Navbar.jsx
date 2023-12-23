import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
  return (
    <div className="cont d-flex flex-wrap">
      <ul className="d-flex flex-wrap text-center" style={{listStyleType:"none", textDecoration: "none"}}>
        <li className="text-center" >
          {" "}
          <NavLink to="/" style={{textDecoration:"none", textAlign: "center"}} >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={{textDecoration:"none"}}>ABOUT ME</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/contact" style={{textDecoration:"none"}}>CONTACT</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/projects" style={{textDecoration:"none"}}>PROJECTS</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
