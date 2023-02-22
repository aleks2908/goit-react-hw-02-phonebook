import React from 'react';
import { Contact } from '../Contact/Contact';

export const ContactList = ({ filtredContacts, onDelete }) => {
  return (
    <ul>
      {filtredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};
