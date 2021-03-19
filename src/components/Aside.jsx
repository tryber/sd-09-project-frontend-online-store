import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import '../componentStyles/Aside.css';

class Aside extends React.Component {
  render() {
    const { categories, getProductsFromQuery, inputValue } = this.props;
    return (
      <aside className="aside">
        <h2>Category</h2>
        <ul>
          {categories.map((category) => (
            <Category
              name={ category.name }
              key={ category.name }
              id={ category.id }
              inputValue={ inputValue }
              getProductsFromQuery={ getProductsFromQuery }
            />
          ))}
        </ul>
      </aside>
    );
  }
}

Aside.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  getProductsFromQuery: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Aside;
