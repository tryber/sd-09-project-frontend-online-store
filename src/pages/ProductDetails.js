import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from '../components/AddToCart';
import CartButton from '../components/CartButton';
import FeedbackProducts from '../components/FeedbackProducts';

class ProductDetails extends React.Component {
  render() {
    const {
      location: { state: {
        id, title, thumbnail, price, attributes, shipping } } } = this.props;
    return (
      <section data-testid="product-detail-name">
        <img src={ thumbnail } alt={ title } />
        <h3>{price}</h3>
        <p>
          {
            attributes.map((att) => (
              <li key={ id }>
                <span key={ id }>{title}</span>
                <span key={ id }>{att.id}</span>
                <span key={ id }>{att.name}</span>
              </li>))
          }
        </p>
        { shipping.free_shipping ? (
          <p data-testid="free-shipping">Frete grátis</p>
        ) : (
          <p> </p>
        )}
        <AddToCart
          onClickCallback={ this.handleAddToCart }
          productInfos={ { id, title, amount: 1, testId: 'product-detail-add-to-cart' } }
        />
        <CartButton />
        <FeedbackProducts />
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
      attributes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        value_name: PropTypes.string,
        value_id: PropTypes.string,
        source: PropTypes.number,
      })),
      // available_quantity: PropTypes.number,
      // sold_quantity: PropTypes.number,
      // stop_time: PropTypes.string,
      // accepts_mercadopago: PropTypes.bool,
      // currency_id: PropTypes.string,
      condition: PropTypes.string,
      address: PropTypes.shape({
        state_id: PropTypes.string,
        state_name: PropTypes.string,
        city_id: PropTypes.string,
        city_name: PropTypes.string,
      }),
      shipping: PropTypes.shape({
        free_shipping: PropTypes.bool,
        mode: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        logistic_type: PropTypes.string,
        store_pick_up: PropTypes.bool,
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
