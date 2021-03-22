import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

class RatingEvaluation extends Component {
  render() {
    const numberOfStars = 5;
    const { rating, handleStorageRating } = this.props;
    return (
      <div onChange={ handleStorageRating }>
        {[...Array(numberOfStars)].map((star, i) => {
          const starRating = i + 1;
          return (
            <label htmlFor={ `${star} ${starRating}` } key={ i }>
              <input
                id={ `${star} ${starRating}` }
                name="star"
                type="radio"
                value={ starRating }
              />
              <FaStar
                size={ 20 }
                color={ starRating <= rating ? '#ffc107' : '#b1b8cf' }
              />
            </label>
          );
        })}
      </div>
    );
  }
}

RatingEvaluation.propTypes = {
  rating: PropTypes.string.isRequired,
  handleStorageRating: PropTypes.func.isRequired,
};

export default RatingEvaluation;
