import React from 'react';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';

class ShoppingCartButton extends React.Component {
  render() {
    const { idProduct, idCategory, product } = this.props;
    return (
      <div>
        <Link
          to={ { pathname: '/shopping-cart', state: { idProduct, idCategory, product } } }
          data-testid="shopping-cart-button"
        >
          <button type="button">CARRINHO</button>
        </Link>
      </div>
    );
  }
}

ShoppingCartButton.propTypes = {
  idProduct: string,
  idCategory: string,
  product: shape({
    id: string,
  }),
};

ShoppingCartButton.defaultProps = {
  idCategory: '',
  idProduct: '',
  product: shape({
    id: '',
  }),
};

export default ShoppingCartButton;
