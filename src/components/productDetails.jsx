import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shopCart from '../images/shopCart.png';
import previous from '../images/previous.png';
import ProductEvaluation from './ProductEvaluation';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: '',
    };

    this.requestLocal = this.requestLocal.bind(this);
  }

  componentDidMount() {
    this.requestLocal();
  }

  async requestLocal() {
    let reqList = await localStorage.getItem('productObj');
    reqList = JSON.parse(reqList);
    const { match: { params: { id } } } = this.props;
    const filteredById = reqList.results.filter((item) => item.id === id);
    this.setState({
      productDetail: filteredById[0],
    });
  }

  render() {
    const { productDetail: { title, thumbnail, price } } = this.state;
    return (
      <>
        <Link to="/">
          <img src={ previous } alt="Imagem de uma seta" className="previous-shop" />
        </Link>

        <div className="content-cart">
          <img
            src={ shopCart }
            alt="Imagem do carrinho de compras"
            className="shop-cart-shop"
          />
        </div>

        <div>
          <img src={ thumbnail } alt={ `Imagem de ${title}` } />
          <h2 data-testid="product-detail-name">{ title }</h2>
          <p>{ price }</p>
        </div>

        <ProductEvaluation />
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
