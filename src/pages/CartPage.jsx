import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import goBack from '../images/voltar.png';
import '../componentStyles/CartPage.css';

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    const { location: { state: { itensAddToCart } } } = props;
    this.state = {
      productsOnCart: itensAddToCart,
      totalProducts: itensAddToCart.map((item) => ({ ...item, quantity: 1 })),
    };
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  addProduct({ id }) {
    const { totalProducts } = this.state;
    const product = totalProducts.find((item) => item.id === id);
    product.quantity += 1;
    console.log(product.quantity);
    this.setState((last) => ({
      ...last,
      totalProducts: last.totalProducts,
    }));
  }

  removeProduct({ id }) {
    const { totalProducts } = this.state;
    const product = totalProducts.find((item) => item.id === id);
    // if (product.quantity < 1)
    product.quantity -= 1;
    console.log(product.quantity);
    this.setState((last) => ({
      ...last,
      totalProducts: last.totalProducts,
    }));
  }

  render() {
    const { productsOnCart, totalProducts } = this.state;
    return (
      <>
        <header>
          <Link to="/"><img src={ goBack } alt="goBack-icon" /></Link>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </header>
        <main className="cart-main-page">
          {productsOnCart.map((item, index) => (
            <div key={ item.id } className="cart-product">
              <h1 data-testid="shopping-cart-product-name" className="cart-product-title">
                { item.title }
              </h1>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>{`R$ ${item.price * totalProducts[index].quantity}`}</p>
              <button
                className="add-product-button"
                data-testid="product-increase-quantity"
                type="button"
                onClick={ () => this.addProduct(item) }
              >
                +
              </button>
              <span
                data-testid="shopping-cart-product-quantity"
              >
                {totalProducts[index].quantity}
              </span>
              <button
                className="remove-product-button"
                data-testid="product-decrease-quantity"
                type="button"
                onClick={ () => this.removeProduct(item) }
              >
                -
              </button>
            </div>
          ))}
          <p>{`Total de produtos no carrinho: ${totalProducts.length}`}</p>
          <p>
            {`Valor total: ${totalProducts
              .reduce((total, item) => total + (item.price * item.quantity), 0)}`}
          </p>
        </main>
      </>
    );
  }
}

CartPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      itensAddToCart: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};

export default CartPage;
