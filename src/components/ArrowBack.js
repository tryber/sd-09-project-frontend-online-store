import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';

class ButtonShoppingCart extends React.Component {
  render() {
    return (
      <div className="arrow-back">
        <Link to="/">
          <TiArrowBackOutline size={ 30 } color="rgb(0, 0, 0)" />
        </Link>
      </div>
    );
  }
}

export default ButtonShoppingCart;
