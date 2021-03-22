import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/AsideMenu.css';

class AsideMenu extends Component {
  render() {
    const { categories, handleCategoryClick } = this.props;
    return (
      <aside className="categories-content">
        <ul className="list-categories">
          {categories.map((categoria) => (
            <li key={ categoria.id }>
              <button
                id={ categoria.id }
                type="button"
                data-testid="category"
                key={ categoria.id }
                onClick={ handleCategoryClick }
                onKeyDown={ handleCategoryClick }
              >
                { categoria.name }
              </button>
            </li>))}
        </ul>
      </aside>
    );
  }
}

AsideMenu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  handleCategoryClick: PropTypes.func.isRequired,
};

export default AsideMenu;
