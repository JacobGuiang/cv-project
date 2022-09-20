/* eslint-disable no-useless-constructor, react/prop-types */
import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    const { firstName, lastName, email, phoneNumber } = this.props;
    return (
      <div>
        <div>
          {firstName} {lastName}
        </div>
        <div>
          {email} {phoneNumber}
        </div>
      </div>
    );
  }
}

export default Header;
