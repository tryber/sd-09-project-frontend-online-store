import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const { location: { state: { itensAddToCart } } } = props;
    this.state = {
      itensAddToCart,
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(newItem) {
    this.setState(({ itensAddToCart }) => ({
      itensAddToCart: [...itensAddToCart, newItem],
    }));
  }

  render() {
    const { location: { state: { data } } } = this.props;
    const { itensAddToCart } = this.state;
    const {
      title, thumbnail,
      price, attributes,
      sold_quantity: soldQuantity, address,
      available_quantity: availableQuantity,
    } = data;
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to={ { pathname: '/cartPage', state: { itensAddToCart } } }
        >
          Carrinho
        </Link>
        <br />
        <Link
          to={ { pathname: '/', state: { itensAddToCart } } }
        >
          Voltar
        </Link>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        {attributes.map((attribute) => (
          <p key={ attribute.id }>{`${attribute.name}: ${attribute.value_name}`}</p>
        ))}
        <p>{ `Quantidade de Itens disponíveis: ${availableQuantity}`}</p>
        <p>{ `Quantidade de itens vendidos: ${soldQuantity}` }</p>
        <p>{ `Localização: ${address.city_name},${address.state_name}`}</p>
        <p>{ `R$ ${price}` }</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addToCart(data) }
        >
          Adicionar ao Carrinho
        </button>
      </div>);
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        sold_quantity: PropTypes.number.isRequired,
        available_quantity: PropTypes.number.isRequired,
        address: PropTypes.shape({
          city_name: PropTypes.string.isRequired,
          state_name: PropTypes.string.isRequired,
        }),
        attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
      }).isRequired,
      itensAddToCart: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
