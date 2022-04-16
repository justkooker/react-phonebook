import React from 'react';

import ContactListItem from '../ContactListItem';
import styles from './ContactList.module.css';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.length !== 0 ? (
        <ContactListItem contacts={contacts} onDelete={onDelete} />
      ) : (
        <p className={styles.noContacts}>No contacts</p>
      )}
    </ul>
  );
};

export default ContactList;
