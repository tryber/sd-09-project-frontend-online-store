import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      comment: '',
      rating: 5,
      feedbacks: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFeedback = this.handleFeedback.bind(this);
    this.renderFeedbackSection = this.renderFeedbackSection.bind(this);
    this.checkStorage = this.checkStorage.bind(this);
    this.renderFeedbacks = this.renderFeedbacks.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.checkStorage();
  }

  componentDidUpdate() {
    const { email, comment, rating, feedbacks } = this.state;
    const unsavedFeedback = {
      email,
      comment,
      rating,
    };
    localStorage.setItem('unsavedFeedback', JSON.stringify(unsavedFeedback));
    localStorage.setItem('feedbackList', JSON.stringify(feedbacks));
  }

  handleClick() {
    const { location } = this.props;
    const { details } = location.state;
    const previousList = this.loadCartList();
    previousList.push(details);
    localStorage.setItem('cartList', JSON.stringify(previousList));
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleFeedback() {
    const unsavedFeedback = JSON.parse(localStorage.getItem('unsavedFeedback'));
    console.log(unsavedFeedback);
    const { feedbacks } = this.state;
    console.log(feedbacks);
    this.setState({ feedbacks: [...feedbacks, unsavedFeedback] });
  }

  loadCartList() {
    let previousList = localStorage.getItem('cartList');
    if (previousList === null) {
      previousList = [];
      return previousList;
    }
    return JSON.parse(previousList);
  }

  checkStorage() {
    const feedbackList = localStorage.getItem('feedbackList');
    const unsavedFeedback = localStorage.getItem('unsavedFeedback');
    if (unsavedFeedback !== null) {
      this.setState({
        email: JSON.parse(unsavedFeedback).email,
        comment: JSON.parse(unsavedFeedback).comment,
        rating: JSON.parse(unsavedFeedback).rating,
      });
    }
    if (JSON.parse(feedbackList) !== null) {
      console.log(feedbackList);
      this.setState({
        feedbacks: JSON.parse(feedbackList),
      });
    }
  }

  renderFeedbacks(feedbacks) {
    return (feedbacks.map((feedback) => (
      <div key={ feedback.email } className="feedback">
        <h4>{ feedback.rating }</h4>
        <p>{ feedback.comment }</p>
        <p>{ feedback.email }</p>
      </div>
    )));
  }

  renderFeedbackSection() {
    const { email, comment, rating, feedbacks } = this.state;

    return (
      <form className="feedback-form">
        <h4>Avaliações</h4>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={ email }
          onChange={ this.handleChange }
        />
        <span>{ rating }</span>
        <input
          type="range"
          name="rating"
          min="1"
          max="5"
          value={ rating }
          onChange={ this.handleChange }
          required
        />
        <textarea
          data-testid="product-detail-evaluation"
          placeholder="Mensagem (opcional)"
          name="comment"
          value={ comment }
          onChange={ this.handleChange }
        />
        <button type="button" onClick={ this.handleFeedback }>Avaliar</button>
        { feedbacks.length !== 0 ? this.renderFeedbacks(feedbacks) : null}
      </form>
    );
  }

  render() {
    const { location } = this.props;
    const { details } = location.state;
    const { title, price, thumbnail, sold_quantity: soldQuantity } = details;

    return (
      <div className="product-detail">
        <h2 data-testid="product-detail-name">{ `${title} - R$${price}` }</h2>
        <img alt={ `${title}` } src={ thumbnail } className="product-image" />
        <section className="specs">
          <h4>Especificações</h4>
          <ul>
            <li>{ `Unidades vendidas: ${soldQuantity}` }</li>
          </ul>
        </section>
        <div>
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar ao Carrinho
          </button>
        </div>
        <Link to="/cart" data-testid="shopping-cart-button">CARRINHO</Link>
        {this.renderFeedbackSection()}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      details: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        sold_quantity: PropTypes.number,
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
