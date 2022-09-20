/* eslint-disable no-useless-constructor, react/prop-types */
import React, { Component } from 'react';

class Input extends Component {
  constructor() {
    super();
  }

  render() {
    const { labelText, name, value, onChange } = this.props;
    return (
      <div>
        <label htmlFor={name}>
          {labelText}
          <input
            onChange={onChange}
            value={value}
            type="text"
            name={name}
            id={name}
          />
        </label>
      </div>
    );
  }
}

export default Input;
