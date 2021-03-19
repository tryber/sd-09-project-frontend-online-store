import React from 'react';
import PropTypes from 'prop-types';

class UpdateQty extends React.Component {
  constructor(props) {
    super(props);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  removeFromCart(product) {
    console.log(product);
  }

  render() {
    const { product, updateQty } = this.props;
    return (
      <section>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => updateQty(product, '+') }
        >
          +
        </button>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => updateQty(product, '-') }
        >
          -
        </button>
        <button
          type="button"
          onClick={ () => this.removeFromCart(product) }
        >
          X
        </button>
      </section>
    );
  }
}

UpdateQty.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    thumb: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  updateQty: PropTypes.func.isRequired,
};
export default UpdateQty;
