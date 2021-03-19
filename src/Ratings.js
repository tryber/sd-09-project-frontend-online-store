import React from 'react';
import PropTypes from 'prop-types';

class Ratings extends React.Component {
  render() {
    const { ratings } = this.props;
    return (
      <div>
        <span name="1" className="fa fa-star checked" />
        <span name="2" className="fa fa-star checked" />
        <span name="3" className="fa fa-star checked" />
        <span name="4" className="fa fa-star" />
        <span name="5" className="fa fa-star" />
        <p>{ ratings.email }</p>
        <p>{ratings.message}</p>
      </div>
    );
  }
}
Ratings.propTypes = {
  ratings: PropTypes.shape({
    email: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
};
export default Ratings;
