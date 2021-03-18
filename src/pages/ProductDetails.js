import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { location } = this.props;
    const params = new URLSearchParams(location.search);
    const title = params.get('title');
    const image = params.get('image');
    const price = params.get('price');
    return (
      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
        <img src={ image } alt={ title } />
        <h4>
          Preço: $
          {' '}
          {price}
        </h4>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
};

export default ProductDetails;
