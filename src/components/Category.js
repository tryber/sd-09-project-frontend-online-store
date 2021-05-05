import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <label htmlFor={ category.id }>
        <input type="radio" id={ category.id } name="category" value={ category.name } />
        <li data-testid="category">{ category.name }</li>
      </label>
    );
  }
}

Category.propTypes = { category: PropTypes.object }.isRequired;

export default Category;
