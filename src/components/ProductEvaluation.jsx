import React from 'react';
import PropTypes from 'prop-types';

class ProductEvaluation extends React.Component {
  renderStars(callbackHandle) {
    const result = [];
    const length = 5;

    for (let index = 1; index <= length; index += 1) {
      result.push(
        <label key={ `star${index}` } htmlFor={ `star${index}` }>
          <input
            type="radio"
            id={ `star${index}` }
            name="rating"
            value={ index }
            onClick={ callbackHandle }
          />
          {index}
        </label>,
      );
    }

    return result;
  }

  render() {
    const { objectProduct: { id }, handle, callback, reviews } = this.props;

    return (
      <>
        <h2 className="product-detail-title">Avaliações</h2>
        <div className="product-detail-form">
          <p>
            <input type="email" name="email" placeholder="Email" onChange={ handle } />
            {this.renderStars(handle).map((star) => star)}
          </p>
          <p>
            <textarea
              name="message"
              data-testid="product-detail-evaluation"
              onChange={ handle }
            />
          </p>
          <button type="button" onClick={ () => callback(id) }>Avaliar</button>
        </div>

        <div className="product-detail-form">
          { reviews().map(({ email, rating, message }, index) => (
            <div key={ `review${index}` } className="product-evaluation-review">
              <p>
                <span>{email}</span>
                <span>{rating}</span>
              </p>
              <p>{message}</p>
            </div>
          )) }
        </div>
      </>
    );
  }
}

ProductEvaluation.propTypes = ({
  objectProduct: PropTypes.shape({
    id: PropTypes.string,
  }),
  handle: PropTypes.func,
  callback: PropTypes.func,
}).isRequired;

export default ProductEvaluation;
