/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fName: '',
      lName: '',
      email: '',
      phone: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState();
  }

  render() {
    const { fName, lName, email, phone } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="fNameInput">
            First Name
            <input
              onChange={this.handleChange}
              value={fName}
              type="text"
              name="fName"
              id="fNameInput"
            />
          </label>
          <label htmlFor="lNameInput">
            Last Name
            <input
              onChange={this.handleChange}
              value={lName}
              type="text"
              name="lName"
              id="lNameInput"
            />
          </label>
          <label htmlFor="emailInput">
            Email
            <input
              onChange={this.handleChange}
              value={email}
              type="text"
              name="email"
              id="emailInput"
            />
          </label>
          <label htmlFor="phoneInput">
            Phone Number
            <input
              onChange={this.handleChange}
              value={phone}
              type="text"
              name="phone"
              id="phoneInput"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <Header fName={fName} lName={lName} email={email} phone={phone} />
      </div>
    );
  }
}

export default App;
