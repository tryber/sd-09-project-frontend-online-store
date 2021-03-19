import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoryInput extends Component {
  render() {
    const { name, id, selectionCallback } = this.props;

    return (
      <label htmlFor={ id }>
        <input
          id={ id }
          type="radio"
          name="category"
          value={ id }
          data-testid="category"
          onClick={ selectionCallback }
        />
        { name }
      </label>
    );
  }
}

CategoryInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selectionCallback: PropTypes.func,
};

CategoryInput.defaultProps = {
  selectionCallback: () => { console.log('No event to handle.'); },
};
