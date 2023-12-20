import React from 'react'
import { NavLink } from 'react-router-dom'
import {useNavigate} from "react-router-dom"


const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className='div-notfound'>
      <h1>this page is not found</h1>
      <button onClick={()=> navigate(-1)} className="btn-notfound">go to back</button>
      <NavLink to = "/">Go to Home</NavLink>
    </div>
  )
}

export default NotFound
