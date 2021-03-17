import React from 'react';
import { Link } from 'react-router-dom';
import { string, number, shape } from 'prop-types';
import AddToCartButton from './AddToCartButton';

class Product extends React.Component {
  render() {
    const { product } = this.props;
    const {
      id,
      title,
      price,
      thumbnail,
      category_id: categoryId,
      available_quantity: availableQuantity,
      shipping,
    } = product;
    const { free_shipping: freeShipping } = shipping;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ `${title}` } />
        <p>{ title }</p>
        <p>{ `R$ ${price}` }</p>
        {freeShipping && <p data-testid="free-shipping">Frete Grátis</p>}
        <Link
          to={ { pathname: `details/${categoryId}/${id}`, state: { product } } }
          data-testid="product-detail-link"
        >
          Detalhe
        </Link>
        <AddToCartButton
          datatestid="product-add-to-cart"
          productData={ { id, title, price, thumbnail, availableQuantity } }
        />
      </div>

    );
  }
}

Product.propTypes = {
  product: shape({
    title: string.isRequired,
    price: number.isRequired,
    thumbnail: string.isRequired,
    category_id: string.isRequired,
    availableQuantity: number,
  }).isRequired,
};

export default Product;
