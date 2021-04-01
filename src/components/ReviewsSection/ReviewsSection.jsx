import React, { Component } from 'react';
import { string } from 'prop-types';
import InputContext from '../InputContext';
import ReviewForm from '../ReviewForm';
import ReviewsBoard from '../ReviewsBoard';

export default class ReviewsSection extends Component {
  render() {
    const { id } = this.props;

    return (
      <InputContext.Consumer>
        {
          ({ reviews, saveNewReview }) => (
            <section>
              <h4>Avaliações</h4>
              <ReviewForm id={ id } onSubmitForm={ saveNewReview } />
              <ReviewsBoard
                reviews={ reviews
                  .find(({ id: reviewId }) => id === reviewId) || { reviews: [] } }
              />
            </section>
          )
        }
      </InputContext.Consumer>
    );
  }
}

ReviewsSection.propTypes = {
  id: string.isRequired,
};
