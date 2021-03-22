import React, { Component } from 'react';
import RatingEvaluation from './RatingEvaluation';
import '../styles/components/ProductEvaluation.css';

class ProductEvaluation extends Component {
  constructor(props) {
    super(props);

    const localEvaluation = localStorage.getItem('rating');

    this.state = {
      rating: localEvaluation,
    };

    this.handleStorageRating = this.handleStorageRating.bind(this);
  }

  handleStorageRating({ target }) {
    this.setState({
      rating: target.value,
    });
    localStorage.setItem('rating', target.value);
  }

  render() {
    const { rating } = this.state;
    return (
      <div className="product-evaluation-main">
        Avaliações
        <form>
          <fieldset>
            <input placeholder="e-mail" type="email" required />
            <RatingEvaluation
              rating={ rating }
              handleStorageRating={ this.handleStorageRating }
            />
            <textarea
              placeholder="Comentário(opcional)"
              data-testid="product-detail-evaluation"
              name="message"
            />
            <button type="submit">Avaliar</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ProductEvaluation;
