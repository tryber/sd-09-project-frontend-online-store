import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoriesCheckBox extends Component {
  render() {
    const { category: { name, id }, change } = this.props;
    return (
      <li>
        <label htmlFor={ name }>
          <input
            type="radio"
            data-testid="category"
            name="category"
            id={ name }
            value={ id }
            onClick={ change }
          />
          { name }
        </label>
      </li>
    );
  }
}
CategoriesCheckBox.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }),
  change: PropTypes.func,
}.isRequired;

export default CategoriesCheckBox;
