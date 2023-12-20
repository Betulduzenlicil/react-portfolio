import React from 'react'
import { useParams } from 'react-router-dom'
import {members} from "../helper/members"



const Details = () => {
    const {id}=useParams()
 const newData=   members.filter(member=>member.id===Number(id))
  return (
    
    <div>
      {newData.map((item,i)=>(
        <div>
            <p>{newData.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Details
