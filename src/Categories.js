import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { id, name, onChange } = this.props;
    return (
      <label
        htmlFor={ id }
        data-testid="category"
      >
        { name }
        <input
          name="category-radio"
          type="radio"
          id={ id }
          key={ id }
          className="cat-radio"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Categories.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Categories;
