import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useContextCrud } from "../context/contextCrudContext";
const AddContact = () => {
  const navigate = useNavigate();
  const { addContacts } = useContextCrud();
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState(" ");
  const [lastName, setLastname] = useState(" ");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastname(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const add = (e) => {
    e.preventDefault();

    if (name === "" && email === "") {
      alert("You cannot left the fields empty!");
      return;
    }

    addContacts({ name, email, lastName, message });
    setName("");
    setEmail("");
    setLastname("");
    setMessage("");

    navigate("/");
  };

  return (
    <div>
      <div className="container my-4">
        <h1>Add Contacts</h1>
        <form onSubmit={add}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              First name:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
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
              value={lastName}
              onChange={lastNameHandler}
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
              value={email}
              onChange={emailHandler}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputMessage" className="form-label">
              Messages :{" "}
            </label>
            <textarea
              className="form-control"
              value={message}
              onChange={messageHandler}
              cols={30}
              id="exampleInputMessage"
            />
          </div>

          <button type="submit" className="btn btn-primary my-2">
            Add
          </button>
        </form>
        <div className="my-4">
          <Link to="/">
            <KeyboardDoubleArrowLeftIcon
              className="bg-success text-white"
              style={{ borderRadius: "50%" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
