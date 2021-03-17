import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Categorias extends React.Component {
  render() {
    const { categories, onClick } = this.props;
    return (
      <div className="category-filter">
        {categories.map((categoria) => (
          <button
            className="hvr-forward category-button"
            id={ categoria.id }
            type="button"
            key={ categoria.id }
            onClick={ onClick }
            data-testid="category"
          >
            {categoria.name}
          </button>
        ))}
      </div>
    );
  }
}

Categorias.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Categorias;
