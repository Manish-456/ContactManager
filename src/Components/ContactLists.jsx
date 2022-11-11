import React, { useEffect, useState } from "react";
import ContactItems from "./ContactItems";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useContextCrud } from "../context/contextCrudContext";
const ContactLists = () => {
  const { contacts, retrieveContacts, searchResults, searchHandler, text } =
    useContextCrud();

  const renderContact = (text.length < 1 ? contacts : searchResults).map(
    (contact) => {
      return (
        <div key={contact.id}>
          <ContactItems contacts={contact} />
        </div>
      );
    }
  );
  useEffect(() => {
    retrieveContacts();
  }, []);
  const getSearchTerm = (e) => {
    searchHandler(e.target.value);
  };
  return (
    <>
      <div className="container position-relative">
        <div className="container">
          <div className="text-success my-4">
            <h2>Your Contact Lists:</h2>
          </div>
          <div className="container">
            <input
              className="form-control me-3"
              onChange={getSearchTerm}
              value={text}
              style={{ height: "50px", fontSize: "1.5rem" }}
              type="search"
              placeholder="Search Contacts"
              aria-label="Search"
            />
          </div>
          <div className="container my-4">
            {renderContact.length > 0 ? renderContact : "No Contacts Available"}
          </div>
        </div>
        <Link to="/add" style={{ position: "absolute", right: "33px" }}>
          <AddIcon
            className="position-absolute bg-primary text-light end-0"
            style={{ borderRadius: "50%" }}
          />
        </Link>
      </div>
    </>
  );
};

export default ContactLists;
