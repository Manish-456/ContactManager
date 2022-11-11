import React from "react";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "#45EBA5",
        fontFamily: "cursive",
        fontWeight: "bold",
        color: "white",
      }}
    >
      <div className="container">
        <div className="main">
          <h1 className="text-center">Contact Manager</h1>
        </div>
      </div>
      <div
        style={{
          color: "grey",
          border: "0.25px dotted black",
          boxShadow: "0.2rem 0.1rem 0.2rem grey",
        }}
      ></div>
    </div>
  );
}
export default Header;
