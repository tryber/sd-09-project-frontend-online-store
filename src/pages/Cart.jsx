import React from 'react';
import { Link } from 'react-router-dom';
import { captureProduct } from '../services/functions';
import ProductCart from '../components/ProductCart';
import './Cart.css';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      totalPriceProducts: 0,
    };

    this.renderCart = this.renderCart.bind(this);
  }

  componentDidMount() {
    this.changeState();
  }

  changeState() {
    const [products, totalPriceProducts] = captureProduct();
    this.setState({
      products,
      totalPriceProducts,
    });
  }

  renderCart(products) {
    return (
      <>
        {products.map((eachProduct) => (
          <ProductCart key={ eachProduct.id } eachProduct={ eachProduct } />
        ))}
      </>
    );
  }

  render() {
    const { products, totalPriceProducts } = this.state;

    return (
      <div>
        <header className="shopping-cart-header">
          <Link to="/" data-testid="back-home-button">
            <i className="far fa-arrow-alt-circle-left" />
          </Link>
        </header>
        <main>
          <h1>Carrinho de Compras</h1>
          { products.length < 1 ? (
            <div data-testid="shopping-cart-empty-message">
              <p>Seu carrinho está vazio</p>
            </div>) : this.renderCart(products) }
          <div className="shopping-cart-finished">
            <h2>
              Total:
              {totalPriceProducts}
            </h2>
            <Link
              to={ {
                pathname: 'checkout',
                state: { access: true },
              } }
              data-testid="checkout-products"
            >
              Finalizar Pedido
            </Link>
          </div>
        </main>
      </div>
    );
  }
}

export default Cart;
