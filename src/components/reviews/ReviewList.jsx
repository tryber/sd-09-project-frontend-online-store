import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReviewList extends Component {
  render() {
    const { productID } = this.props;
    let reviewList = JSON.parse(localStorage.getItem(productID));
    if (!reviewList) {
      reviewList = [];
    }
    const renderReviews = reviewList
      .map((review, index) => (
        <section key={ index }>
          <p>{review.email}</p>
          <p>{review.stars}</p>
          <p>{review.textReview}</p>
        </section>
      ));

    return (
      <div>
        {renderReviews}
      </div>
    );
  }
}

ReviewList.propTypes = {
  productID: PropTypes.string.isRequired,
};

export default ReviewList;
