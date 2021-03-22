import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  render() {
    const { categories, handleCategory } = this.props;
    return (
      <aside className="categories-container">
        <ul>
          {(categories.length > 0) && (
            categories
              .map(({ id, name }) => (
                <li key={ id }>
                  <button
                    type="button"
                    data-testid="category"
                    onClick={ () => handleCategory(id) }
                  >
                    {name}
                  </button>
                </li>
              ))
          )}
        </ul>
      </aside>
    );
  }
}

Category.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleCategory: PropTypes.func.isRequired,
};
export default Category;
