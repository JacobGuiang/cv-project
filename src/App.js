/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Input from './Input';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
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
    const { firstName, lastName, email, phoneNumber } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            labelText="First Name"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          <Input
            labelText="Last Name"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
          <Input
            labelText="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <Input
            labelText="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <Header
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phoneNumber}
        />
      </div>
    );
  }
}

export default App;
