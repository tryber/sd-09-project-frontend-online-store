import React from 'react';
import { Link } from 'react-router-dom';
import { bool, number, shape, string } from 'prop-types';
import ShoppingCartButton from '../components/ShoppingCartButton';
import AddToCartButton from '../components/AddToCartButton';
import EvaluatorForm from '../components/EvaluatorForm';

class Details extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    const {
      id,
      title,
      price,
      thumbnail,
      shipping,
      category_id: categoryId,
      available_quantity: availableQuantity } = product;
    const { free_shipping: freeShipping } = shipping;
    return (
      <section>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="product-detail-name">{title}</p>
        <p>{price}</p>
        {freeShipping && <p data-testid="free-shipping">Frete Grátis</p>}
        <Link to="/">Home</Link>
        <ShoppingCartButton
          idProduct={ id }
          idCategory={ categoryId }
          product={ product }
        />
        <AddToCartButton
          datatestid="product-detail-add-to-cart"
          productData={ { id, title, price, availableQuantity } }
        />
        <EvaluatorForm />
      </section>
    );
  }
}

Details.propTypes = {
  location: shape({
    state: shape({
      product: shape({
        id: string.isRequired,
        title: string.isRequired,
        price: number,
        thumbnail: string,
        shipping: shape({
          freeShipping: bool.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Details;
