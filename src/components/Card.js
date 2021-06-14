import './styles/style.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target: { value } }) {
    const { product, handleAddClick, handleSubClick, handleDeleteClick } = this.props;
    switch (value) {
    case '+':
      handleAddClick(product);
      break;
    case '-':
      handleSubClick(product);
      break;
    default:
      handleDeleteClick(product.id);
    }
  }

  cartActionButtons() {
    const { product } = this.props;
    const { available_quantity: availableQuantity, quantityToOrder } = product;
    const smallerValue = 1;
    return (
      <div>
        <h4 data-testid="shopping-cart-product-quantity">{ quantityToOrder }</h4>
        <button type="button" onClick={ this.handleClick }>X</button>
        <button
          type="button"
          onClick={ this.handleClick }
          value="-"
          disabled={ smallerValue === quantityToOrder }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <button
          type="button"
          onClick={ this.handleClick }
          value="+"
          disabled={ availableQuantity <= quantityToOrder }
          data-testid="product-increase-quantity"
        >
          +
        </button>
      </div>
    );
  }

  cardButtons() {
    const { product } = this.props;
    const { id, quantityToOrder, available_quantity: availableQuantity } = product;
    return (
      <div>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
          value="+"
          disabled={ quantityToOrder >= availableQuantity }
        >
          Adicionar
        </button>
        <p>
          <Link
            data-testid="product-detail-link"
            key={ id }
            to={ { pathname: `/product/${id}`, state: { product } } }
          >
            Ver detalhes
          </Link>
        </p>
      </div>
    );
  }

  render() {
    const { product, testid, inCart } = this.props;
    const { title, thumbnail, price, id, shipping: { free_shipping: free } } = product;
    return (
      <div className="product" data-testid="product">
        <h4 data-testid={ testid }>{ title }</h4>
        <img className="imgProduct" src={ thumbnail } alt="pictyre" />
        <p>
          { `R$ ${parseFloat(price).toFixed(2)}` }
        </p>
        {free && <p data-testid="free-shipping">Frete grátis</p> }
        {inCart && this.cartActionButtons(id) }
        {!inCart && this.cardButtons() }
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }),
  testid: PropTypes.string,
}.isRequired;

export default Card;
