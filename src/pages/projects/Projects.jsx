import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import img1 from "../../assets/img/project-1.jpg"
import img2 from "../../assets/img/project-2.jpg"
import img3 from "../../assets/img/project-3.jpg"
import img4 from "../../assets/img/project-4.jpg"
import img5 from "../../assets/img/project-5.jpg"
import img6 from "../../assets/img/project-6.jpg"


const Projects = () => {
  return (
    <div>
      <>
  <div className="project-bgImg-container">
    {/* PROJECT NAV
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="index.html" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="about.html" className="nav__link">
            About Me
          </a>
        </li>
        <li className="nav__item">
          <a href="projects.html" className="nav__link nav__link--active">
            My Projects
          </a>
        </li>
        <li className="nav__item">
          <a href="contact.html" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
    </nav> */}
    <div className="projects__bio-image">
      <h1>My Projects</h1>
    </div>
  </div>
  {/* PROJECT MAIN */}
  <main className="projects">
    <div className="projects__items">
      <div className="projects__item">
        <img src={img1} alt="My Project" />
      </div>
      <div className="projects__item">
        <img src={img2} alt="My Project" />
      </div>
      <div className="projects__item">
        <img src={img3} alt="My Project" />
      </div>
      <div className="projects__item">
        <img src={img4} alt="My Project" />
      </div>
      <div className="projects__item">
        <img src={img5} alt="My Project" />
      </div>
      <div className="projects__item">
        <img src={img6} alt="My Project" />
      </div>
    </div>
  </main>
  {/* PROJECT FOOTER */}
  <footer className="vertical">
    <div className="social-icons">
      <a href="#">
        <i className="fab fa-twitter fa-2x" />
      </a>
      <a href="#">
        <i className="fab fa-facebook fa-2x" />
      </a>
      <a href="#">
        <i className="fab fa-instagram fa-2x" />
      </a>
      <a href="#">
        <i className="fab fa-github fa-2x" />
      </a>
    </div>
    <div className="copyright">© Copyright 2023</div>
  </footer>
</>
      <ProjectCard/>
    </div>
  )
}

export default Projects
