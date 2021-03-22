import React from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends React.Component {
  render() {
    const {
      objectProduct,
      quantity,
      increase,
      decrease,
      callback,
    } = this.props;
    const { id, title, thumbnail, price } = objectProduct;
    const availableQuantity = objectProduct.available_quantity;

    return (
      <div className="product-detail-content">
        <img src={ thumbnail } alt={ title } />
        <div className="product-detail-wrapper">
          <h2 data-testid="product-detail-name">{title}</h2>
          <p>{price}</p>
          <p>
            <button type="button" onClick={ () => decrease(id) }>
              -
            </button>
            {quantity}
            <button
              type="button"
              onClick={ () => increase(id, availableQuantity) }
            >
              +
            </button>
          </p>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => callback(objectProduct) }
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  objectProduct: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
  quantity: PropTypes.number,
  callback: PropTypes.func,
}.isRequired;

export default ProductDetail;
