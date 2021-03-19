import React from 'react';
import PropTypes from 'prop-types';

import CardProduct from './CardProduct';

class Main extends React.Component {
  render() {
    // [product1, product2]
    const { products } = this.props;
    return (
      <main className="main">
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        { products
          .map((product) => <CardProduct key={ product.id } product={ product } />) }
      </main>
    );
  }
}

Main.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
};

export default Main;
