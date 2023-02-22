import React from 'react';
import css from './Contact.module.css';

export const Contact = ({ contact, onDelete }) => {
  return (
    <li className={css.contactListItem}>
      {contact.name}: {contact.number}{' '}
      <button
        onClick={() => onDelete(contact.id)}
        className={css.button}
        id={contact.id}
      >
        Delete
      </button>
    </li>
  );
};
