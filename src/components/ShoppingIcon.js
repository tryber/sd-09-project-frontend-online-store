import React from 'react';
import { IoBagRemoveOutline } from 'react-icons/io5';

class ButtonShoppingCart extends React.Component {
  render() {
    return (
      <div className="shopping-icon">
        <IoBagRemoveOutline size={ 180 } color="rgb(0, 0, 0)" />
      </div>
    );
  }
}

export default ButtonShoppingCart;
