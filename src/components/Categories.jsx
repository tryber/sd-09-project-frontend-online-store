import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categoryId, name, handleRadio } = this.props;

    return (
      <label htmlFor={ categoryId } data-testid="category">
        <input
          type="radio"
          name="categoryId"
          id={ categoryId }
          value={ categoryId }
          onChange={ handleRadio }
        />
        { name }
      </label>
    );
  }
}

Categories.propTypes = {
  name: PropTypes.string,
  categoryId: PropTypes.string,
  handleRadio: PropTypes.func,
};

Categories.defaultProps = {
  name: PropTypes.string,
  categoryId: PropTypes.string,
  handleRadio: PropTypes.func,
};

export default Categories;
