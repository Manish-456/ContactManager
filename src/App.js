import Header from "./Components/Header";
import "./App.css";
import { ContextCrudProvider } from "./context/contextCrudContext";
import AddContact from "./Components/AddContact";
import ContactLists from "./Components/ContactLists";

import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContactDetails from "./Components/ContactDetails";
import EditContact from "./Components/EditContact";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <ContextCrudProvider>
          <Routes>
            <Route path="/add" element={<AddContact />}></Route>
            <Route path="/" element={<ContactLists />} />
            <Route path="/details/:id" element={<ContactDetails />} />
            <Route path="/edit" element={<EditContact />} />
          </Routes>
        </ContextCrudProvider>
      </Router>
    </div>
  );
}

export default App;
