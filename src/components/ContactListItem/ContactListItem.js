import React from 'react';
import propTypes from 'prop-types';
import styles from './ContactListItem.module.css';
const ContactListItem = ({ contacts, onDelete }) => (
  <>
    {contacts.map(({ id, name, number }) => (
      <li className={styles.listItem} key={id}>
        <div className={styles.container}>
          <span>{name}</span>
          <span>{number}</span>
        </div>
        <button
          className={styles.listItemBtn}
          type="button"
          onClick={() => onDelete(id)}
        >
          X
        </button>
      </li>
    ))}
  </>
);
ContactListItem.defaultProps = {
  onDelete: () => null,
};
ContactListItem.propsTypes = {
  onDelete: propTypes.func,
};
export default ContactListItem;
