import React from 'react'


import "./Project.css"
import {members }from "../../helper/members"
import { useNavigate } from "react-router-dom";
const Projects = () => {
  const navigate = useNavigate();
  return (
    
    <div className='projects-bgImg-container  gap-5 mb-3' > 
      
  <main className=" w-100 text-center mx-auto gap-3">
 
    <div className='project mb-3 d-flex   justify-content-center '>
      {members.map(({id, name, img, subject})=>(
        <div key={id}
        className="details card  mb-5 me-2 ms-2 w-75 mx-auto p-2"
        onClick={() => navigate(`${id}`)}>
         <img src={img} alt="img" />
         <h3>{name}</h3>

        </div>
      ))}

    </div>
   
  </main>
 

     
    </div>
  )
}

export default Projects
