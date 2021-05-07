import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories, handleInputRadio } = this.props;
    return (
      <section className="categorySideBar">
        <h4 className="categoryTitle">Categorias</h4>
        <ul className="categoriesList">
          {categories.map((category) => (
            <li key={ category.id }>
              <label htmlFor={ category.id } key={ category.id }>
                <input
                  id={ category.id }
                  type="radio"
                  data-testid="category"
                  key={ category.id }
                  value={ category.id }
                  name="categories-radio-button"
                  onChange={ handleInputRadio }
                />
                {category.name}
              </label>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleInputRadio: PropTypes.func.isRequired,
};

export default Categories;
