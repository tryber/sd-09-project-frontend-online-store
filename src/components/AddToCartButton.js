import React from 'react';
import { string, number, shape } from 'prop-types';

class AddToCartButton extends React.Component {
  constructor() {
    super();
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  addItemToCart(productData) {
    const itensCarts = JSON.parse(localStorage.getItem('itens'));
    const addNewProduct = [...itensCarts, productData];
    localStorage.setItem('itens', JSON.stringify(addNewProduct));
  }

  render() {
    const { productData, datatestid } = this.props;
    return (
      <div>
        <button
          data-testid={ datatestid }
          type="button"
          onClick={ () => this.addItemToCart(productData) }
        >
          Adicionar ao carrinho
        </button>

      </div>
    );
  }
}

AddToCartButton.propTypes = {
  productData: shape({
    title: string,
    price: number,
    id: string,
    thumbnail: string,
  }),
  datatestid: string.isRequired,
};

AddToCartButton.defaultProps = {
  productData: {},
};

export default AddToCartButton;
