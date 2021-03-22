import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import saveProductLocalStorage, {
  findProductLocalStorage,
  quantityAllProductsCart,
  quantityAllProductItem,
  productIncrease,
  productDecrease,
} from '../services/functions';
import ProductDetail from '../components/ProductDetail';
import ProductEvaluation from '../components/ProductEvaluation';
import Shipping from '../components/Shipping';
import './DetailedProduct.css';

class DetailedProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      email: '',
      rating: 0,
      message: '',
    };

    this.quantityProductCart = this.quantityProductCart.bind(this);
    this.btnProductIncrease = this.btnProductIncrease.bind(this);
    this.btnProductDecrease = this.btnProductDecrease.bind(this);
    this.saveReview = this.saveReview.bind(this);
    this.handleEvaluation = this.handleEvaluation.bind(this);
    this.showReviews = this.showReviews.bind(this);
    this.addProductState = this.addProductState.bind(this);
  }

  componentDidMount() {
    this.quantityProductCart();
  }

  handleEvaluation(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  saveReview(id) {
    const { email, rating, message } = this.state;
    const [gottenItemObj, index] = findProductLocalStorage(id);

    if (email && rating > 0) {
      if (gottenItemObj.reviews) {
        gottenItemObj.reviews.push({
          email,
          rating,
          message,
        });
        // localStorage
        //   .setItem(`review/rating${index}`, JSON.stringify(gottenItemObj.reviews));
      } else {
        gottenItemObj.reviews = [
          {
            email,
            rating,
            message,
          },
        ];
      }
    }

    localStorage.setItem(`itemProduct${index}`, JSON.stringify(gottenItemObj));

    this.setState({
      email: '',
      rating: 0,
      message: '',
    });
  }

  showReviews(id) {
    const gottenItemObj = findProductLocalStorage(id)[0];

    if (gottenItemObj) return gottenItemObj.reviews;

    return [];
  }

  quantityProductCart() {
    const {
      location: {
        state: {
          array: { id },
        },
      },
    } = this.props;

    const quantity = quantityAllProductItem(id);

    this.setState({ quantity });
    return quantity;
  }

  btnProductIncrease(id, max) {
    this.setState((prevValue) => ({
      quantity: prevValue.quantity < max ? prevValue.quantity + 1 : max,
      totalProducts: prevValue.totalProducts + 1,
    }));

    productIncrease(id);
  }

  btnProductDecrease(id) {
    this.setState((prevValue) => ({
      quantity: prevValue.quantity > 0 ? prevValue.quantity - 1 : 0,
      totalProducts: prevValue.totalProducts > 0 ? prevValue.totalProducts - 1 : 0,
    }));

    productDecrease(id);
  }

  addProductState(id) {
    this.setState((prevValue) => ({
      quantity: prevValue.quantity + 1,
      totalProducts: prevValue.totalProducts + 1,
    }));

    saveProductLocalStorage(id);
  }

  render() {
    const { location } = this.props;
    const {
      state: { array },
    } = location;
    const { id, shipping } = array;
    const { quantity } = this.state;

    return (
      <div>
        <header className="product-detail-header">
          <Link to="/" data-testid="back-home-button">
            <i className="far fa-arrow-alt-circle-left" />
          </Link>
          <Link to="/cart" data-testid="shopping-cart-button">
            <i className="fas fa-shopping-cart" />
            <span data-testid="shopping-cart-size">
              {quantityAllProductsCart()}
            </span>
          </Link>
        </header>
        <main>
          <ProductDetail
            objectProduct={ array }
            quantity={ quantity }
            increase={ this.btnProductIncrease }
            decrease={ this.btnProductDecrease }
            callback={ this.addProductState }
          />
          <span>
            <Shipping shipping={ shipping } />
          </span>
          <ProductEvaluation
            objectProduct={ array }
            handle={ this.handleEvaluation }
            callback={ this.saveReview }
            reviews={ () => this.showReviews(id) }
          />
        </main>
      </div>
    );
  }
}

DetailedProduct.propTypes = {
  array: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequired;

export default DetailedProduct;
