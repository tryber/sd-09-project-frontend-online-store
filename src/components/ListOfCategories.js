import React from 'react';
import PropTypes from 'prop-types';

class ListOfCategories extends React.Component {
  render() {
    const { category, handleClick } = this.props;
    const { name, id } = category;
    return (
      <div>
        <label htmlFor="category">
          <input
            type="radio"
            data-testid="category"
            name="category"
            id={ id }
            onClick={ () => handleClick(id) }
          />
          {name}
        </label>
      </div>
    );
  }
}

ListOfCategories.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ListOfCategories;
