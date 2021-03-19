import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  render() {
    const { name, id, getProductsFromQuery, inputValue } = this.props;
    return (
      <li>
        <button
          className="category-button"
          data-testid="category"
          type="button"
          onClick={ () => getProductsFromQuery(id, inputValue) }
        >
          { name }
        </button>
      </li>
    );
  }
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  getProductsFromQuery: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Category;
