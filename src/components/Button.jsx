import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Button extends Component {
  render() {
    const { activateButton } = this.props;
    return (
      <button
        data-testid="query-button"
        onClick={ activateButton }
        type="button"
      >
        <FontAwesomeIcon icon={ faSearch } style={ { color: '#fff' } } />
      </button>
    );
  }
}

Button.propTypes = {
  activateButton: PropTypes.func,
}.isRequired;

export default Button;
