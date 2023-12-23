import React from 'react'
import "./About.css"
const About = () => {
  return (
    <>
  <div className="about-bgImg-container">

    <div className="about__bio-image">
      <h2 className='text-center text-dark fw-bold fs-1'>BIO</h2>
      <p className='text-light w-75 mx-auto fw-bold'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas sed sequi porro. In eligendi laborum asperiores eos voluptas autem repudiandae facere minus quis harum voluptatibus, odit nostrum vero velit aspernatur, dolorum ad temporibus ipsum. Tenetur iste assumenda rerum perferendis optio ullam officia officiis, nulla consequuntur architecto iusto obcaecati sint est eius, accusamus voluptatibus eaque. Soluta, earum, eum accusamus autem tempora adipisci laboriosam, a fugit qui aspernatur odio quas error quibusdam. Tempora assumenda repellendus, temporibus laudantium, dolore dolores minima at inventore, fugit culpa quod facilis dolorem fuga natus! Sunt inventore, quae quod facilis vitae doloribus a sit aliquam eos dolorem?(2022).
      </p>
    </div>
  </div>
  {/* ABOUT MAIN */}
  <main className="about ">
    <div className="about__container ">
      <div className="about__job card text-center bg-dark text-light">
        <h2 className="text-secondary">2020 - 2021</h2>
        <h3>CLARUSWAY</h3>
        <h6>Instructor &amp; Full Stack Developer</h6>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          vero dolores eum ut, culpa ullam quis quasi exercitationem in
          adipisci.
        </p>
      </div>
      <div className="about__job card text-center bg-light text-dark">
        <h2 className="text-secondary">2019 - 2020</h2>
        <h3>Google</h3>
        <h6>Front End Developer</h6>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          vero dolores eum ut, culpa ullam quis quasi exercitationem in
          adipisci.
        </p>
      </div>
      <div className="about__job card text-center bg-dark text-light">
        <h2 className="text-secondary">2017 - 2019</h2>
        <h3>The Best Websites Co.</h3>
        <h6>Front End Developer</h6>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          vero dolores eum ut, culpa ullam quis quasi exercitationem in
          adipisci.
        </p>
      </div>
    </div>
  </main>
 
</>
  )
}

export default About
