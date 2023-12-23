import React from "react";
import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footer-alt">
        <div className="icons">
          <a href="#tw">
            {" "}
            {/* <i className="fa-brands fa-twitter fa-2x"></i> */}
            <FaTwitter />
          </a>
          <a href="#fb">
          <FaSquareFacebook />
          </a>
          <a href="#ins">
          <FaInstagram />
          </a>
          <a href="#gh">
          <FaGithub />
          </a>
        </div>
        <p className="pAlt">
          {" "}
          <span className="anime">Designed by Betül DUZENLI CIL &nbsp; </span> &copy; 2023
         
        </p>
      </div>
    </footer>
  );
};

export default Footer;

