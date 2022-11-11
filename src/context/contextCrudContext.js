import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import api from "../api/Contacts";

const contextCrudContext = createContext();

export function ContextCrudProvider({ children }) {
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState(" ");
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // Retrievecontacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    if (response.data) {
      setContacts(response.data);
    }
  };

  // Addcontacts
  const addContacts = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts( [...contacts, response.data]);
 
  };
  // RemoveContacts
  const removeHandler = async (id) => {
    
    await api.delete(`/contacts/${id}`);
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContacts);
  };

  // UpdateContacts
  const updateHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    
    const { id } = response.data;
    
    setContacts(
      contacts.map((contact) => {
       
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };
  // searchcontacts
  const searchHandler = (searchTerm) => {
    setText(searchTerm);
    if (searchTerm !== " ") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };
  const value = {
    text,
    contacts,
    retrieveContacts,
    addContacts,
    removeHandler,
    updateHandler,
    searchHandler,
    searchResults,
    searchTerm,
  };

  return (
    <contextCrudContext.Provider value={value}>
      {children}
    </contextCrudContext.Provider>
  );
}

export function useContextCrud() {
  return useContext(contextCrudContext);
}
