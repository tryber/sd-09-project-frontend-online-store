import React from 'react';
import PropTypes from 'prop-types';

class CheckoutOrder extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { checkout: [] };
  // }

  render() {
    const { checkout } = this.props;
    return (
      <div>
        { checkout.map((item) => (
          <div key={ item.id }>
            <img src={ item.thumbnail } alt={ item.title } />
            <div>{ item.title }</div>
            <div>
              R$
              { item.price }
            </div>
          </div>)) }
      </div>
    );
  }
}

CheckoutOrder.propTypes = {
  checkout: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CheckoutOrder;
