import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SendToShoppingFinish extends Component {
  render() {
    const { storageFetchJson } = this.props;
    return (
      <div>
        <Link to="/shoppingfinish">
          <button
            type="button"
            data-testid="checkout-products"
            onClick={ () => {
              localStorage.setItem('storageItems', JSON.stringify(storageFetchJson));
            } }
          >
            Finalizar Compra
          </button>
        </Link>
      </div>
    );
  }
}

SendToShoppingFinish.propTypes = {
  storageFetchJson: PropTypes.array,
}.isRequired;

export default SendToShoppingFinish;
