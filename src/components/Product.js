import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  constructor(props) {
    super(props);
    const { product } = this.props;
    const { title, thumbnail, price, id, quantity } = product;
    this.state = {
      title,
      thumbnail,
      price,
      id,
      quantity,
    };
    this.addToCart = this.addToCart.bind(this);
    this.increaseProductQuantity = this.increaseProductQuantity.bind(this);
  }

  addToCart() {
    this.saveProductToLocalStorage();
  }

  constructObjectToSave() {
    const { title, thumbnail, price, id, quantity } = this.state;
    const obj = { title, thumbnail, price, id, quantity };
    return obj;
  }

  async increaseProductQuantity() {
    const data = JSON.parse(localStorage.getItem('cart'));
    for (let outsideIndex = 0; outsideIndex < data.length; outsideIndex += 1) {
      let counter = 0;
      for (let insideIndex = 0; insideIndex < data.length; insideIndex += 1) {
        if (data[outsideIndex].id === data[insideIndex].id) {
          counter += 1;
        }
      }
      data[outsideIndex].quantity = counter;
      this.setState({ quantity: counter });
    }
    localStorage.setItem('cart', JSON.stringify(data));
  }

  saveProductToLocalStorage() {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    const products = JSON.parse(localStorage.getItem('cart'));
    products.push(this.constructObjectToSave());
    localStorage.setItem('cart', JSON.stringify(products));
    this.increaseProductQuantity();
  }

  async removeProductFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('cart'));
    const { title, quantity } = this.state;
    for (let index = 0; index < data.length; index += 1) {
      if (data[index].title === title) {
        data.splice(index, 1);
        const newQuantity = quantity - 1;
        this.setState({ quantity: newQuantity });
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(data));
  }

  render() {
    const { product, tag } = this.props;
    const { quantity } = this.state;
    return (
      <div data-testid="product">
        <h1 data-testid="shopping-cart-product-name">{ product.title }</h1>
        <img src={ product.thumbnail } alt="product" />
        <div>{product.price}</div>
        <button
          onClick={ this.addToCart }
          type="button"
          data-testid={ tag }
        >
          add carrinho
        </button>
        <p type="number" data-testid="shopping-cart-product-quantity">
          { quantity }
        </p>
        <button
          type="button"
          onClick={ () => this.saveProductToLocalStorage() }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          type="button"
          onClick={ () => this.removeProductFromLocalStorage() }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <Link
          to={ {
            pathname: `/details/${product.id}`,
            state: { product },
          } }
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

Product.propTypes = { product: PropTypes.object }.isRequired;

export default Product;
