import React, { Component } from 'react';
import { shape } from 'prop-types';
import Rating from '../Rating';

export default class ReviewsBoard extends Component {
  render() {
    const { reviews: reviewsProps } = this.props;
    const { reviews } = reviewsProps;

    return (
      reviews.map(({ email, rating, message }) => (
        <section key={ `email: ${email} / rating: ${rating}` }>
          <h5>{ email }</h5>
          <Rating
            readOnly
            value={ rating }
            onHandleRatingUpdate={ () => {} }
          />
          {
            message
              ? <p>{ message }</p>
              : null
          }
        </section>
      ))
      // null
    );
  }
}

ReviewsBoard.propTypes = {
  reviews: shape({}).isRequired,
};
