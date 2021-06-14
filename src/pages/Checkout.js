import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReviewProducts from '../components/ReviewProducts';
import ClientsData from '../components/ClientsData';

class Checkout extends Component {
  render() {
    return (
      <div className="checkout">
        <Link to="/cart">
          <img
            src="https://img.icons8.com/fluent/48/000000/circled-left.png"
            alt="arrow back"
            className="button start"
          />
        </Link>
        <ReviewProducts />
        <ClientsData />
      </div>
    );
  }
}

export default Checkout;
