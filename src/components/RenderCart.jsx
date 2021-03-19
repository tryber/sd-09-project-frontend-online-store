import React from 'react';
import PropTypes from 'prop-types';

class RenderCarts extends React.Component {
  render() {
    const { title, count, id, clickPlus, clickDecrease } = this.props;
    return (
      <div>
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          { count }
        </p>
        <button
          type="button"
          value={ id }
          onClick={ () => clickPlus(id) }
          data-testid="product-increase-quantity"
        >
          +++
        </button>
        <button
          type="button"
          value={ id }
          onClick={ () => clickDecrease(id) }
          data-testid="product-decrease-quantity"
        >
          ---
        </button>
        <button type="button">XXX</button>
      </div>
    );
  }
}

RenderCarts.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  clickPlus: PropTypes.func.isRequired,
  clickDecrease: PropTypes.func.isRequired,
};

export default RenderCarts;
