import React from 'react';
import PropTypes from 'prop-types';

class ListCategories extends React.Component {
  render() {
    const { categories, handleInputCategories } = this.props;
    return (
      <div className="categories">
        {categories.map(({ name, id }) => (
          <div key={ id }>
            <label htmlFor={ id }>
              <input
                name="inputCategories"
                data-testid="category"
                type="radio"
                onClick={ handleInputCategories }
                value={ id }
              />
              { name }
            </label>
          </div>))}
      </div>);
  }
}

ListCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleInputCategories: PropTypes.func.isRequired,
};

export default ListCategories;
