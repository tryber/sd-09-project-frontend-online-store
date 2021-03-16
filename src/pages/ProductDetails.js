import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartButton from '../components/CartButton';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartList: [],
    };
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  addProductToCart(product) {
    const { cartList } = this.state;
    if (!cartList.includes(product)) {
      this.setState({ cartList: [...cartList, product] });
    }
  }

  render() {
    const {
      location: {
        state: { product },
      },
    } = this.props;
    const { cartList } = this.state;
    return (
      <div>
        <header>
          <CartButton cartList={ cartList } />
        </header>
        <main>
          <h1 data-testid="product-detail-name">{ product.title }</h1>
          <p>{ `Preço: R$${product.price}` }</p>
          <img src={ product.thumbnail } alt="product" />
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ () => this.addProductToCart(product) }
          >
            Adicionar ao carrinho
          </button>
        </main>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
      }),
    }),
  }),
}.isRequired;

export default ProductDetails;
