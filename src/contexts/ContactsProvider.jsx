import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ContactsContext = React.createContext();

export const useContacts = () => {
  return userContext(ContactsContext);
};

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const createContacts = (id, name) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }];
    });
  };

  return (
    <ContactsContext.Provider value={{ contacts, createContacts }}>
      {children}
    </ContactsContext.Provider>
  );
};
