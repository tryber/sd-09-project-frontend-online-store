import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TiArrowBackOutline, TiShoppingCart } from 'react-icons/ti';
import Header from '../Components/Header/Header';
import * as api from '../services/api';
import Cart from '../services/Data';
import Loading from '../Components/Loading/Loading';
import './ProductDetails.css';
import ButtonsCardDetails from '../Components/ButtonsCardDetails/ButtonsCardDetails';
import AvaliationForm from '../Components/AvaliationForm/AvaliationForm';
import PictureCardDetail from '../Components/PictureCardDetail/PictureCardDetail';

export default class ProductDetails extends Component {
  constructor(state) {
    super(state);
    this.searchForID = this.searchForID.bind(this);
    this.addCartItem = this.addCartItem.bind(this);
    this.sumQuant = this.sumQuant.bind(this);
    this.state = {
      product: {},
      loading: true,
      totalQuant: 0,
    };
  }

  async componentDidMount() {
    const { match, location: { search } } = this.props;
    const { category, id } = match.params;
    this.sumQuant();
    this.searchForID(id);
  }

  searchForID(id) {
    fetch(`https://api.mercadolibre.com/items?ids=${id}`)
      .then((resp) => resp.json())
      .then((result) => this.addProductOnState(result[0].body));
  }

  addProductOnState(selectedProduct) {
    console.log(selectedProduct);
    this.setState({ product: selectedProduct, loading: false });
  }

  sumQuant() {
    const counter = localStorage.getItem('quant');
    this.setState({ totalQuant: counter });
  }

  addCartItem(product) {
    const check = Cart.some((value) => value.title === product.title);
    if (check) {
      Cart.forEach((cartItem) => {
        if (cartItem.title === product.title) {
          cartItem.quantity += 1;
        }
      });
    } else {
      const add = document.querySelector('.numberToAdd');
      const { title, thumbnail, price } = product;
      Cart.push({
        title,
        thumbnail,
        price,
        quantity: add.value,
      });
    }
  }

  render() {
    const { product, loading, totalQuant } = this.state;
    const { title, price, pictures } = product;
    if (loading) return <Loading />;
    return (
      <div>
        <Header totalQuant={ totalQuant } />
        <div className="headerLinks">
          <Link to="/" className="linkShoppingCart">
            <div>
              <TiArrowBackOutline />
            </div>
          </Link>
          <Link
            className="linkShoppingCart"
            to="/ShoppingCart"
            data-testid="shopping-cart-button"
          >
            <div>
              <TiShoppingCart />
              <div data-testid="shopping-cart-size">{ totalQuant }</div>
            </div>
          </Link>
        </div>
        <div data-testid="product-detail-name" className="productContainer">
          <PictureCardDetail pictures={ pictures } title={ title } />
          <div className="titleDetails">
            { title }
            { price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
            <ButtonsCardDetails product={ product } />
            <button
              className="detailsToAddCart"
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ () => this.addCartItem(product) }
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
        <AvaliationForm />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
