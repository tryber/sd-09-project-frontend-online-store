import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends Component {
  render() {
    const { categories, getProducts } = this.props;
    return (
      <aside>
        <span>Categorias:</span>
        { categories.map((category) => (
          <div key={ category.id }>
            <label data-testid="category" htmlFor={ category.id }>
              <input
                id={ category.id }
                type="radio"
                name="category"
                onClick={ () => getProducts(category.id) }
              />
              { category.name }
            </label>
          </div>
        )) }
      </aside>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  getProducts: PropTypes.func,
}.isRequired;

export default CategoriesList;
