import 'modern-normalize';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import css from '../components/styles.module.css';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: this.state.name, id: nanoid() },
      ],
    }));
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
          marginLeft: '30%',
          fontSize: 26,
          color: '#010101',
        }}
      >
        <h2 className={css.title}>PhoneBook</h2>

        <form className={css.form}  onSubmit={this.handleSubmit}>
          <label>
            Name <br />
            <input
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <button className={css.button} type="submit">
            Add contact
          </button>
        </form>
        <h2 className={css.title}>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
