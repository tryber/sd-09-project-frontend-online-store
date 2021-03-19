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
      totalProducts: itensAddToCart,
    };
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  addProduct(objectItem) {
    const { totalProducts } = this.state;
    const product = totalProducts.find((item) => item.id === objectItem.id);
    this.setState((lastState) => ({
      ...lastState,
      totalProducts: [...totalProducts, product],
    }));
  }

  removeProduct(objectItem) {
    const { totalProducts } = this.state;
    const product = totalProducts.find((item) => item.id === objectItem.id);
    const indexOfProduct = totalProducts.indexOf(product);
    totalProducts.splice(indexOfProduct, 1);
    this.setState((lastState) => ({ totalProducts: lastState.totalProducts }));
  }

  render() {
    const { productsOnCart, totalProducts } = this.state;
    console.log(totalProducts);
    return (
      <>
        <header>
          <Link to="/"><img src={ goBack } alt="goBack-icon" /></Link>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </header>
        <main className="cart-main-page">
          {productsOnCart.map((item) => (
            <div key={ item.id } className="cart-product">
              <h1 data-testid="shopping-cart-product-name" className="cart-product-title">
                { item.title }
              </h1>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>{`R$ ${item.price}`}</p>
              <button
                data-testid="product-increase-quantity"
                type="button"
                onClick={ () => this.addProduct(item) }
              >
                Add Product
              </button>
              <span
                data-testid="shopping-cart-product-quantity"
              >
                {totalProducts.filter((product) => product.id === item.id).length}
              </span>
              <button
                data-testid="product-decrease-quantity"
                type="button"
                onClick={ () => this.removeProduct(item.id) }
              >
                Remove Product
              </button>
            </div>
          ))}
          <p>{`Total de produtos no carrinho: ${totalProducts.length}`}</p>
          <p>
            {`Valor total: ${totalProducts
              .reduce((total, item) => total + item.price, 0)}`}
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
