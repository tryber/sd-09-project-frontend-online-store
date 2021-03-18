import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { activateButton } = this.props;
    return (
      <button
        data-testid="query-button"
        onClick={ activateButton }
        type="button"
      >
        lupa
      </button>
    );
  }
}

Button.propTypes = {
  activateButton: PropTypes.func,
}.isRequired;

export default Button;
