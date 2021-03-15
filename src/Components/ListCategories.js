import React from 'react';
import PropTypes from 'prop-types';

class ListCategories extends React.Component {
  render() {
    const { category: { id, name }, radio } = this.props;
    return (
      <div>
        <label htmlFor={ id }>
          <input
            type="radio"
            data-testid="category"
            id={ id }
            name="category"
            value={ id }
            onClick={ () => radio(id) }
          />
          {name}
        </label>
      </div>
    );
  }
}

ListCategories.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  radio: PropTypes.func.isRequired,
};

export default ListCategories;
