import React, { Component } from 'react';
import { bool, string, func } from 'prop-types';

export default class FormGroup extends Component {
  constructor(props) {
    super(props);
    this.controllInput = this.controllInput.bind(this);
  }

  controllInput(event) {
    const { value } = event.target;
    const { onHandleChange, parentState } = this.props;
    onHandleChange(parentState, value);
  }

  render() {
    const { dataTestId, label, type, id, value } = this.props;

    return (
      <label
        htmlFor={ id }
      >
        { label }
        {
          type === 'textarea'
            ? (
              <textarea
                data-testid={ dataTestId ? id : '' }
                type={ type }
                id={ id }
                value={ value }
                onChange={ this.controllInput }
                rows="4"
                cols="50"
              />
            )
            : (
              <input
                data-testid={ dataTestId ? id : '' }
                type={ type }
                id={ id }
                value={ value }
                onChange={ this.controllInput }
              />
            )
        }
      </label>
    );
  }
}

FormGroup.propTypes = {
  dataTestId: bool.isRequired,
  label: string.isRequired,
  type: string.isRequired,
  id: string.isRequired,
  value: string.isRequired,
  onHandleChange: func.isRequired,
  parentState: string.isRequired,
};
