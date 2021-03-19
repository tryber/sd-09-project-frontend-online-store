import React from 'react';
import PropTypes from 'prop-types';
import ButtonAdd from '../components/ButtonAdd';

class ProductDetails extends React.Component {
  formStructure() {
    return (
      <form>
        <div>
          <input type="email" placeholder="E-mail" required />
          <select required>
            <option value="5">
              5
            </option>
            <option value="4">
              4
            </option>
            <option value="3">
              3
            </option>
            <option value="2">
              2
            </option>
            <option value="1">
              1
            </option>
          </select>
        </div>
        <div>
          <textarea rows="5" cols="30" data-testid="product-detail-evaluation" />
        </div>
      </form>
    );
  }

  render() {
    const { location } = this.props;
    const params = new URLSearchParams(location.search);
    const product = {
      title: params.get('title'),
      image: params.get('image'),
      price: params.get('price'),
    };
    return (
      <div>
        <h2 data-testid="product-detail-name">{product.title}</h2>
        <img src={ product.image } alt={ product.title } />
        <h4>
          Preço: $
          {' '}
          {product.price}
        </h4>
        <ButtonAdd
          product={ product }
          id="product-detail-add-to-cart"
          idLink="shopping-cart-button"
        />
        {this.formStructure()}
      </div>

    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
};

export default ProductDetails;
