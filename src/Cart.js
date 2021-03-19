import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemCart from './ItemCart';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.onclickQuantity = this.onclickQuantity.bind(this);
  }

  onclickQuantity(item, operation) {
    const { handleProduct } = this.props;
    if (operation === 'add' && item.available > item.purchaseQuantity) {
      item.purchaseQuantity += 1;
      item.increaseTotal = 1;
      handleProduct(item);
    }
    if (operation === 'sub') {
      item.purchaseQuantity -= 1;
      item.increaseTotal = -1;
      handleProduct(item);
    }
  }

  render() {
    const { purchaseItems } = this.props;
    if (!purchaseItems || !purchaseItems.length) {
      return <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>;
    }
    return (
      <div>
        {
          purchaseItems.map((item) => (<ItemCart
            key={ item.id }
            item={ item }
            onClick={ this.onclickQuantity }
          />))
        }
        <Link to="/checkout" className="button-link" data-testid="checkout-products">
          Finalizar Compra
        </Link>
      </div>
    );
  }
}

Cart.propTypes = {
  itemsCart: PropTypes.arrayOf(),
}.isRequired;

export default Cart;
