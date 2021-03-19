import React from 'react';
import { Redirect } from 'react-router';

export default class CheckoutButton extends React.Component {
  constructor() {
    super();

    this.state = {
      ChangePage: false,
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage() {
    this.setState({
      ChangePage: true,
    });
  }

  render() {
    const { ChangePage } = this.state;

    return (
      <div>
        { ChangePage
          ? <Redirect to="/checkout" />
          : (
            <button
              type="submit"
              onClick={ this.changePage }
              data-testid="checkout-products"
            >
              Finalizar Compra
            </button>
          )}
      </div>
    );
  }
}
