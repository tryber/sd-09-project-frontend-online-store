import React from 'react';
import PropTypes from 'prop-types';

class AddButton extends React.Component {
  constructor() {
    super();
    this.state = {
      // id: '',
      cont: 1,
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    const { product: { id, title, thumbnail, price } } = this.props;
    const { cont } = this.state;
    this.setState((anterior) => ({
      cont: anterior.cont + 1,
    }));
    const productInfoLocalStorage = `${cont}||${title}||${thumbnail}||${price}`;
    localStorage.setItem(id, productInfoLocalStorage);
  }

  render() {
    return (
      <div>
        <button onClick={ this.addItem } type="submit" data-testid="product-add-to-cart">
          Adiciona ao carrinho
        </button>
      </div>
    );
  }
}

AddButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default AddButton;
