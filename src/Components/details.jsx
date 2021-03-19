import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaReply, FaCartPlus } from 'react-icons/fa';
import dataCart from '../services/dataCart';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: dataCart.array,
      cartCounter: props.location.state.cartCounter,
    };
    this.handlerState = this.handlerState.bind(this);
  }

  handlerState(products) {
    const { array, cartCounter } = this.state;
    const { title, price, thumbnail, id } = products;
    if (array.some((productItem) => products.id === productItem.id)) {
      array.forEach((productItem) => {
        if (productItem.id === products.id
          && products.available_quantity > productItem.quantity) {
          productItem.quantity += 1;
          this.setState({ cartCounter: cartCounter + 1 });
        }
      });
    } else {
      dataCart.array.push({ title, price, thumbnail, id, quantity: 1 });

      this.setState({ cartCounter: cartCounter + 1 });
    }
  }

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
    const { location: { state: { products } } } = this.props;
    const { title, price, thumbnail, available_quantity: available } = products;
    const { cartCounter } = this.state;
    return (
      <div>
        <header>
          <Link to="/cart" data-testid="shopping-cart-button">
            <FaShoppingCart />
          </Link>
          <p data-testid="shopping-cart-size">{ cartCounter }</p>
          <Link to="/">
            <FaReply />
          </Link>
        </header>
        <main>
          <aside className="leftAside">
            <p
              data-testid="product-detail-name"
            >
              {`${title} - R$ ${price}`}
            </p>
            <img src={ thumbnail } alt="img" />
            <p>{ `Disponivel em Estoque: ${available} unidade(s)`}</p>
            {products.shipping.free_shipping
              ? <p data-testid="free-shipping">Frete Grátis</p>
              : null }
          </aside>
          <ul className="rightAside">
            <li> Especificações Técnicas</li>
            <li>lorem ipsum dolor sit amet, consectetur adipis</li>
          </ul>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => this.handlerState(products) }
          >
            <FaCartPlus />
          </button>
        </main>
        {this.formStructure()}
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      products: PropTypes.string,
      cartCounter: PropTypes.number,
    }),
  }).isRequired,
};

export default Details;
