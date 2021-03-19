import React from 'react';
import { FaStar } from 'react-icons/fa';
import { number, func } from 'prop-types';

class Star extends React.Component {
  render() {
    const starNumber = 5;
    const { rating, setRating } = this.props;
    return (
      <div onChange={ setRating }>
        {[...Array(starNumber)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label htmlFor={ `star${ratingValue}` } key={ i }>
              <input
                id={ `star${ratingValue}` }
                name="star"
                className="star-input"
                type="radio"
                value={ ratingValue }
              />
              <FaStar
                className="star"
                size={ 20 }
                color={ ratingValue <= rating ? '#ffc107' : '#e4e5e9' }
              />
            </label>
          );
        })}
      </div>
    );
  }
}

Star.propTypes = {
  rating: number,
  setRating: func,
}.isRequired;

export default Star;
