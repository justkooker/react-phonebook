import React, { Component } from 'react';
import propTypes from 'prop-types';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import styles from './Phonebook.module.css';

class Phonebook extends Component {
  static defaultProps = {
    filter: '',
  };
  static propTypes = {
    contacts: propTypes.arrayOf(
      propTypes.exact({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.string.isRequired,
      }),
    ),
  };
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    this.setState({
      contacts: [...this.state.contacts, data],
    });
  };
  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const filterToLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase),
    );
  };
  checkName = data => {
    const isExistName = this.state.contacts.find(
      contact => contact.name === data.name,
    );
    if (isExistName === undefined) {
      const { id, name, number } = data;
      const newContact = {
        id,
        name,
        number,
      };
      this.addContact(newContact);
      return;
    } else {
      alert('This name is occupied');
    }
  };
  deleteContact = deleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
    }));
  };
  render() {
    const filteredContacts = this.getFilteredContacts();
    const { filter } = this.state;
    return (
      <div className={styles.container}>
        <ContactForm onSubmit={this.checkName} />
        <Filter onChange={this.handleFilter} value={filter} />

        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default Phonebook;
