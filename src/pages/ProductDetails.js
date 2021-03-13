import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TiArrowBackOutline, TiShoppingCart } from 'react-icons/ti';
import Cart from '../services/Data';
import Loading from '../Components/Loading/Loading';
import '../Components/ProductDetailCard/ProductDetails.css';
import AvaliationForm from '../Components/AvaliationForm/AvaliationForm';
import CounterCart from '../Components/CounterCart/CounterCart';
import ProductDeatailsCard from '../Components/ProductDetailCard/ProductDetailscard';

export default class ProductDetails extends Component {
  constructor(state) {
    super(state);
    this.searchForID = this.searchForID.bind(this);
    this.addCartItem = this.addCartItem.bind(this);
    this.CounterCart = this.CounterCart.bind(this);
    this.state = {
      product: {},
      loading: true,
      quant: 0,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.searchForID(id);
    this.CounterCart();
  }

  CounterCart() {
    let counter = 0;
    Cart.forEach((product) => { counter += product.quantity; });
    this.setState({ quant: counter });
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

  addCartItem() {
    const { product } = this.state;
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
    this.CounterCart();
  }

  render() {
    const { product, loading, quant } = this.state;
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
            <div>
              <TiShoppingCart />
              <CounterCart quant={ quant } />
            </div>
          </Link>
        </div>
        { (loading)
          ? <Loading />
          : <ProductDeatailsCard product={ product } onClick={ this.addCartItem } />}
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
