import React, { Component } from 'react';
import { bool, string, oneOfType, element, func } from 'prop-types';

export default class Button extends Component {
  render() {
    const { submit, id, children, dataTestId, onHandleClick, disabled } = this.props;

    return (
      <button
        data-testid={ dataTestId ? id : '' }
        type={ submit ? 'submit' : 'button' }
        id={ id }
        onClick={ onHandleClick }
        disabled={ disabled }
      >
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  submit: bool.isRequired,
  id: string.isRequired,
  dataTestId: bool.isRequired,
  children: oneOfType([string, element]),
  onHandleClick: func,
  disabled: bool,
};

Button.defaultProps = {
  children: '',
  onHandleClick: () => {},
  disabled: false,
};
