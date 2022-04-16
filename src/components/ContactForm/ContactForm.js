import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    state: propTypes.objectOf(propTypes.string.isRequired),
  };
  state = {
    name: '',
    number: '',
  };
  handleChangeName = e => {
    const name = e.currentTarget.name;
    this.setState({ [name]: e.currentTarget.value });
  };
  hadleSubmitForm = e => {
    e.preventDefault();
    const id = nanoid();
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: id,
    };
    this.props.onSubmit(contact);
    this.formReset();
  };
  formReset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form className={styles.form} onSubmit={this.hadleSubmitForm}>
        <input
          className={styles.formInput}
          onChange={this.handleChangeName}
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <input
          className={styles.formInput}
          onChange={this.handleChangeName}
          type="tel"
          name="number"
          placeholder="Number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={styles.formButton} type="submit">
          <div className={styles.btnBackground}>submit</div>
        </button>
      </form>
    );
  }
}
export default ContactForm;
