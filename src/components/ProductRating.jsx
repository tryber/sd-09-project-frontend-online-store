import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';

class ProductRating extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };

    this.userRating = this.userRating.bind(this);
  }

  userRating(event) {
    this.setState({ value: Number(event.target.value) });
  }

  render() {
    const { value } = this.state;
    return (
      <form>
        <h3> Avaliação </h3>
        <fieldset>
          <input type="text" placeholder="Email" />
          <Rating
            name="user-rating"
            value={ value }
            onClick={ this.userRating }
          />
          <div>
            <label htmlFor="user-email">
              <textarea
                data-testid="product-detail-evaluation"
                cols="30"
                rows="5"
                maxLength="1000"
                placeholder="Mensagem (opcional)"
              />
            </label>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default ProductRating;
