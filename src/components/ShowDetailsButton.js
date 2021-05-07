import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShowDetails extends React.Component {
  render() {
    const { id, title, thumbnail, price, attributes, condition,
      address, shipping } = this.props;
    return (
      <Link
        data-testid="product-detail-link"
        to={ {
          pathname: `/pages/details/${id}`,
          state: { id,
            title,
            thumbnail,
            price,
            attributes,
            condition,
            address,
            shipping },
        } }
      >
        Product Details
      </Link>
    );
  }
}

ShowDetails.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
  attributes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    value_name: PropTypes.string,
    value_id: PropTypes.string,
    source: PropTypes.number,
  })),
  condition: PropTypes.string,
  address: PropTypes.string,
  shipping: PropTypes.arrayOf(PropTypes.shape({
    free_shipping: PropTypes.bool,
    mode: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    logistic_type: PropTypes.string,
    store_pick_up: PropTypes.bool,
  })),
}.isRequired;

export default ShowDetails;
