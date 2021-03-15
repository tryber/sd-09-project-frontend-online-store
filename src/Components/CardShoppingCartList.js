import React from 'react';
import PropTypes from 'prop-types';
import CardShoppingCart from './CardShoppingCart';

class CardShoppingCartList extends React.Component {
  render() {
    const { totalShoppingCart } = this.props;

    if (!totalShoppingCart || totalShoppingCart.length === 0) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }

    return (
      <div className="container-card">
        {totalShoppingCart.map((product, index) => (
          <CardShoppingCart
            key={ index }
            product={ product }
            total={ totalShoppingCart.length }
          />
        ))}
      </div>
    );
  }
}

CardShoppingCartList.propTypes = {
  totalShoppingCart: PropTypes.objectOf().isRequired,
};

export default CardShoppingCartList;
