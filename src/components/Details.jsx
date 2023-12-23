import React from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import {members} from "../helper/members"
import NotFound from "../components/Error/NotFound"
import  "./Details.css"

const Details = () => {
  const navigate = useNavigate();
    const {id}=useParams()
 const newData=   members.filter(member=>member.id===Number(id))
 if (newData.length === 0 || !newData[0].img || !newData[0].subject) {
  return <NotFound/>;
}

  return (
    <>
    <div className="container bg-danger text-center">
      <img
        src={newData[0].img}
        alt="image"
        className="w-25 h-100"
      />
      <p className="previousDetails__text">{newData[0].subject}</p>
      
    <div className="btn">
      <button
        className="btn back"
        type="button"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <button
        className="btn home"
        type="button"
        onClick={() => navigate("/")}
      >
        Home
      </button>
    </div>
    </div>
  </>
  )
}

export default Details
