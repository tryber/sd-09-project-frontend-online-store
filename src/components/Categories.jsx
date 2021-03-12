import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories } = this.props;

    return (
      categories.map((category) => (
        <li
          key={ category.id }
          data-testid="category"
        >
          {category.name}
        </li>)));
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf.isRequired,
};

export default Categories;
