import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ContactsContext = React.createContext();

export function useContacts() {
  return React.useContext(ContactsContext);
}

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const createContacts = (id, name) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }];
    });
  };

  return (
    <ContactsContext.Provider value={{ contacts, createContacts }}>
      {children} 40.40
    </ContactsContext.Provider>
  );
};
