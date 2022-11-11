import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import user from "../Components/image/user.png";
import { Link } from "react-router-dom";
import wonderwomen from "./image/wonderwomen.jpg";
import EditIcon from "@mui/icons-material/Edit";
import { useContextCrud } from "../context/contextCrudContext";
const ContactItems = (props) => {
  const { removeHandler } = useContextCrud();

  const { id, name, email, message, lastName } = props.contacts;
  const deleteContact = (id) => {
    removeHandler(id);
  };

  return (
    <div>
      <div
        className="card position-relative my-4 d-flex justify-between flex-row"
        key={id}
      >
        <div>
          <img
            src={
              name.slice(-1) === "a" || name.slice(-1) === "i"
                ? wonderwomen
                : user
            }
            className="my-2"
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            alt=""
          />
        </div>
        <div className="card-body ">
          <Link
            className="text-decoration-none"
            to={{ pathname: `/details/${id}` }}
            state={{ contact: props.contacts }}
          >
            <h5 className="text-dark">
              {name} {lastName}
            </h5>
            <h6>{email}</h6>
            <p className="text-danger">{message}</p>
          </Link>
          <Link to="/edit" state={{ contact: props.contacts }}>
            <EditIcon
              className=" position-absolute top-50  text-danger"
              style={{ right: "50px" }}
            />
          </Link>
          <DeleteOutlineIcon
            onClick={() => {
              deleteContact(id);
            }}
            className=" position-absolute top-50 end-0 text-danger"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactItems;
