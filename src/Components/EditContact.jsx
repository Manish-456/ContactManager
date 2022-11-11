import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContextCrud } from "../context/contextCrudContext";


const EditContact = () => {
  const location = useLocation();
  const { id, name, email, message, lastName } = location.state.contact;
  const navigate = useNavigate()
const { updateHandler } = useContextCrud();
 
  const [newName, setNewName] = useState(name)
  const [newEmail, setNewEmail] = useState(email)
  const [newMessage, setNewMessage] = useState(message)
  const [newLastName, setLastName] = useState(lastName)


  const nameHandler = (e) => {
  setNewName(e.target.value)
  }

  const lastNameHandler = (e) => {
    setLastName(e.target.value)
  }

  const messageHandler = (e) => {
    setNewMessage(e.target.value)
  }

  const emailHandler = (e) => {
 setNewEmail(e.target.value)
  }
  const update = (e) => {
    e.preventDefault();

    if (newName === "" || newEmail === "") {
      alert("You cannot left the fields empty!");
      return;
    }
    updateHandler({id, name:newName, email:newEmail, message:newMessage, lastName: newLastName})
   setNewName("")
   setNewEmail("")
    setLastName("")
    setNewMessage("")
    navigate('/')

  }
  return (
    <div>
      <div className="container my-4">
        <h1>Update Contact</h1>
        <form onSubmit={update}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              First name:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={newName}
              onChange={nameHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              last name:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value ={newLastName}
              onChange = {lastNameHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={newEmail}
              onChange={emailHandler}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputMessage" className="form-label">
              Messages :{" "}
            </label>
            <textarea
              className="form-control"
              value={newMessage}
              onChange={messageHandler}
              cols={30}
              id="exampleInputMessage"
            />
          </div>

          <button type="submit" className="btn btn-primary my-2">
            Update
          </button>
        </form>
      
      </div>
    </div>
  );
};


export default EditContact
