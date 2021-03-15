import React from 'react';
import PropTypes from 'prop-types';

class CardShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeAdd = this.handleChangeAdd.bind(this);
    this.handleChangeDrop = this.handleChangeDrop.bind(this);

    this.state = {
      unit: 1,
    };
  }

  handleChangeAdd() {
    const { unit } = this.state;
    const { product: { available_quantity: availableQuantity } } = this.props;
    if (unit >= availableQuantity) return;
    this.setState({ unit: (unit + 1) });
  }

  handleChangeDrop() {
    const { unit } = this.state;
    this.setState({ unit: (unit - 1) });
  }

  render() {
    const { product: { title, price, thumbnail } } = this.props;
    const { unit } = this.state;

    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } />
        <div>
          <button
            type="button"
            onClick={ this.handleChangeDrop }
            data-testid="product-decrease-quantity"
          >
            -
          </button>
          <p data-testid="shopping-cart-product-quantity">{ unit }</p>
          <button
            type="button"
            onClick={ this.handleChangeAdd }
            data-testid="product-increase-quantity"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

CardShoppingCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    available_quantity: PropTypes.number,
  }).isRequired,
};

export default CardShoppingCart;
