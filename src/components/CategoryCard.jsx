import React from 'react';
import PropTypes from 'prop-types';

class CategoryCard extends React.Component {
  render() {
    const { category, getCategoryId } = this.props;
    const { id, name } = category;
    return (
      <div className="category-card">
        <label htmlFor={ id }>
          <input
            type="radio"
            name="categories"
            id={ id }
            value={ name }
            data-testid="category"
            onClick={ () => getCategoryId(id) }
          />
          { name }
        </label>
      </div>
    );
  }
}

CategoryCard.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  getCategoryId: PropTypes.func.isRequired,
};

export default CategoryCard;
