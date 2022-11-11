import React from 'react'

import ladyuser from '../Components/image/ladyuser.png'
import happyuser from '../Components/image/happyuser.png'
import { Link, useLocation } from 'react-router-dom'

const ContactDetails = () => {
const location = useLocation()

const { name, email, message, lastName } = location.state.contact;

  return (
    <div className='container'>
      <div className="card mb-3 my-4 container" style={{width: "20rem", boxShadow: "0.2rem 0.3rem 0.2rem black, -0.2rem -0.3rem 0.2rem black"}}>
  <img src={name.slice(-1) === "a" || name.slice(-1) === "i" ? ladyuser : happyuser} style={{height: "200px", width: "200px", margin: "auto"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{name} {lastName}</h5>
    <p className="card-text">{email}</p>
    <p className="card-text"><small className="text-muted">{message} </small></p>
  </div>

</div> 
<div className="text-center container">
  <Link to="/">
  <button className='bg-success text-light'  >Back to Home</button>
  </Link>
    
</div>
 
    </div>
  )
}

export default ContactDetails
