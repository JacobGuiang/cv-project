/* eslint-disable no-useless-constructor, react/prop-types */
import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    const { fName, lName, email, phone } = this.props;
    return (
      <div>
        <div>
          {fName} {lName}
        </div>
        <div>
          {email} {phone}
        </div>
      </div>
    );
  }
}

export default Header;
