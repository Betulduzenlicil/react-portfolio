import React from 'react'
import {members} from "../helper/members"
import { useNavigate } from 'react-router-dom'



const ProjectCard = () => {
    const navigate= useNavigate()
  return (
    <div>
      {members.map((member, i)=>(
        <div key={i} onClick={()=>navigate(`/details/${member.id}`)}>
            <h1>{member.name}</h1>
            <p>{member.number}</p>

        </div>
      ))}
    </div>
  )
}

export default ProjectCard
