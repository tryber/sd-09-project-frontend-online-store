import React from 'react';
import Star from './Star';

class RatingForm extends React.Component {
  constructor(props) {
    super(props);
    const initialState = localStorage.getItem('rating');
    this.state = {
      email: '',
      rating: initialState,
      message: '',
    };
    this.setRating = this.setRating.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange({ target }) {
    this.setState({
      email: target.value,
    });
    localStorage.setItem('email', target.value);
  }

  handleTextChange({ target }) {
    this.setState({
      message: target.value,
    });
    localStorage.setItem('message', target.value);
  }

  handleSubmit() {
    const { message, rating, email } = this.state;
    const ratings = document.querySelector('.ratings');
    const email1 = document.createElement('h5');
    email1.innerHTML = email;
    ratings.appendChild(email1);
    const rating1 = document.createElement('p');
    rating1.innerHTML = rating;
    ratings.appendChild(rating1);
    if (message !== '') {
      const msg = document.createElement('p');
      msg.innerHTML = message;
      ratings.appendChild(msg);
    }
    localStorage.setItem('prevRatings', ratings);
  }

  setRating({ target }) {
    this.setState({
      rating: target.value,
    });
    localStorage.setItem('rating', target.value);
  }

  render() {
    const { rating } = this.state;
    return (
      <div>
        Avaliações
        <form>
          <fieldset>
            <input
              type="text"
              placeholder="E-mail"
              onChange={ this.handleInputChange }
              required
            />
            <Star rating={ rating } setRating={ this.setRating } />
            <textarea
              data-testid="product-detail-evaluation"
              name="message"
              placeholder="Mensagem (opcional)"
              onChange={ this.handleTextChange }
            />
            <button type="button" onClick={ this.handleSubmit }>Avaliar</button>
          </fieldset>
        </form>
        <div className="ratings" />
      </div>
    );
  }
}

export default RatingForm;
