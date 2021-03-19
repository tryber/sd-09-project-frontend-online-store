import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaInfoCircle } from 'react-icons/fa';
import dataCart from '../services/dataCart';
// import dataCounter from '../services/dataCounter';

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: dataCart.array,
    };
    this.addCart = this.addCart.bind(this);
  }

  addCart(products) {
    console.log(products.shipping.free_shipping);
    const { globalCounter } = this.props;
    const { array } = this.state;
    const {
      title, price, thumbnail, id, available_quantity: available, shipping,
    } = products;

    if (array.some((productItem) => products.id === productItem.id)) {
      array.forEach((productItem) => {
        if (productItem.id === products.id
          && products.available_quantity > productItem.quantity) {
          productItem.quantity += 1;
          globalCounter();
        }
      });
    } else {
      dataCart.array.push(
        { title, price, thumbnail, id, quantity: 1, available, shipping },
      );
      globalCounter();
    }
  }

  render() {
    const { products, cartCounter } = this.props;
    const { title, price, thumbnail, id, available_quantity: available } = products;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$ ${price.toFixed(2)}` }</p>
        <p>{ `Disponivel em Estoque: ${available} unidade(s)`}</p>
        {products.shipping.free_shipping
          ? <p data-testid="free-shipping">Frete Grátis</p>
          : null }
        <Link
          to={ {
            pathname: `/details/${id}`,
            state: { products, cartCounter },
          } }
          data-testid="product-detail-link"
        >
          <FaInfoCircle />
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.addCart(products) }
        >
          <FaCartPlus />
        </button>

      </div>
    );
  }
}

ItemCard.propTypes = {
  globalCounter: PropTypes.func,
  products: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }),
}.isRequired;

export default ItemCard;
