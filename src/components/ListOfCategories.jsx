import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

class ListOfCategories extends React.Component {
  render() {
    const { categories, onClickSelectedCategory } = this.props;
    if (categories === 0) return <Loading />;
    return (
      <div>
        <p>Categorias:</p>
        {
          categories.map((elem) => (
            <button
              onClick={ () => onClickSelectedCategory(elem.id) }
              key={ elem.id }
              type="button"
              data-testid="category"
              value={ elem.name }
            >
              { elem.name }
            </button>
          ))
        }
      </div>
    );
  }
}

ListOfCategories.propTypes = {
  categories: PropTypes.arrayOf().isRequired,
  onClickSelectedCategory: PropTypes.func.isRequired,
};

export default ListOfCategories;
