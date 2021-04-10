import React, { Component } from 'react';
import { shape, string, func } from 'prop-types';

class ProductCategory extends Component {
  render() {
    const { category: { name, id }, onChange } = this.props;
    return (
      <div className="category">
        <label htmlFor={ id }>
          <input
            type="radio"
            name="category"
            id={ id }
            value={ id }
            data-testid="category"
            onChange={ onChange }
          />
          { name }
        </label>
      </div>
    );
  }
}

ProductCategory.propTypes = {
  category: shape({
    name: string,
    id: string,
  }),
  onChange: func,
}.isRequired;

export default ProductCategory;
