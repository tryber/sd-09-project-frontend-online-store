import './styles/style.css';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CardReview extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(product) {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    if (!itemsInCart) localStorage.setItem('NoMasterCart', JSON.stringify([product]));
    else {
      const itemsToAdd = [...itemsInCart, product];
      localStorage.setItem('NoMasterCart', JSON.stringify(itemsToAdd));
    }
  }

  render() {
    const { product, testid } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div className="product" data-testid="product">
        <img className="imgProduct" src={ thumbnail } alt="pictyre" />
        <h4 data-testid={ testid }>{ title }</h4>
        <p>
          { `R$ ${parseFloat(price).toFixed(2)}` }
        </p>
      </div>
    );
  }
}

CardReview.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }),
  testid: PropTypes.string,
}.isRequired;

export default CardReview;
