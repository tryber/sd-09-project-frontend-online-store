import React from 'react';
import PropTypes from 'prop-types';
import CartButton from '../components/CartButton';
import Categories from '../components/Categories';
import SearchResult from '../components/SearchResult';

class MainContent extends React.Component {
  render() {
    const { handleInputChange, handleInputRadio, handleInputSubmit, categories,
      productsList } = this.props;
    return (
      <main>
        <SearchResult
          submitCallback={ handleInputSubmit }
          handleInputChange={ handleInputChange }
        />
        <CartButton />
        <Categories
          categories={ categories }
          handleInputRadio={ handleInputRadio }
        />
        <SearchResult productsList={ productsList } />
      </main>
    );
  }
}

MainContent.propTypes = {
  handleInputChange: PropTypes.func,
  handleInputRadio: PropTypes.func,
  submitCallback: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
}.isRequired;

export default MainContent;
