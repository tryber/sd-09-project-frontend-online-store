import React from 'react';
import PropTypes from 'prop-types';
import ProductsList from './ProductList';
import '../componentStyles/Main.css';

class Main extends React.Component {
  render() {
    const {
      productsFromQuery,
      isFetchingFromQuery,
      addProductToCart,
      itensAddToCart,
    } = this.props;
    if (productsFromQuery.length <= 0) {
      return (
        <main className="not-found-msg">
          <p>
            Nenhum produto foi encontrado
          </p>
        </main>
      );
    }
    if (isFetchingFromQuery) {
      return (
        <main className="main">
          <ProductsList
            productsFromQuery={ productsFromQuery }
            addProductToCart={ addProductToCart }
            itensAddToCart={ itensAddToCart }
          />
        </main>
      );
    }
    return <div />;
  }
}

Main.propTypes = {
  productsFromQuery: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetchingFromQuery: PropTypes.bool.isRequired,
  addProductToCart: PropTypes.func.isRequired,
  itensAddToCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
