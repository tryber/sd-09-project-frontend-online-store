import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TiArrowBackOutline, TiShoppingCart } from 'react-icons/ti';
import Cart from '../services/Data';
import './ProductDetails.css';
import ButtonsCardDetails from '../Components/ButtonsCardDetails/ButtonsCardDetails';
import AvaliationForm from '../Components/AvaliationForm/AvaliationForm';
import CounterCard from '../Components/CounterCart/CounterCard';

export default class ProductDetails extends Component {
  constructor(state) {
    super(state);
    this.searchForID = this.searchForID.bind(this);
    this.addCartItem = this.addCartItem.bind(this);
    this.counterCart = this.counterCart.bind(this);
    this.state = {
      product: {},
      loading: true,
      quantDetail: 0,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const resp = await fetch(`https://api.mercadolibre.com/items?ids=${id}`);
    const result = await resp.json();
    this.counterCart();
    this.addProductOnState(result[0].body);
  }

  counterCart() {
    let counter = 0;
    Cart.forEach((value) => { counter += value.quantity; });
    this.setState({ quantDetail: counter });

  }

  addProductOnState(selectedProduct) {
    console.log(selectedProduct);
    this.setState({ product: selectedProduct, loading: false });
  }

  addCartItem(product) {
    const check = Cart.some((value) => value.title === product.title);
    const add = document.querySelector('.numberToAdd');
    const addNumber = parseInt(add.value, 10);
    if (check) {
      Cart.forEach((cartItem) => {
        if (cartItem.title === product.title) {
          cartItem.quantity += addNumber;
        }
      });
    } else {
      const { title, thumbnail, price } = product;
      Cart.push({
        title,
        thumbnail,
        price,
        quantity: addNumber,
      });
    }
    let counter = 0;
    Cart.forEach((value) => { counter += value.quantity; });
    this.setState({ quantDetail: counter });
  }

  render() {
    const { product, loading, quantDetail } = this.state;
    const { title, price } = product;
    if (loading) return (<CounterCard total={ 4 } />);
    return (
      <div>
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
            <div><TiShoppingCart /></div>
            <CounterCard total={ quantDetail } />
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
