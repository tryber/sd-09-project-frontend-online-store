import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Produtcs extends React.Component {
  constructor() {
    super();
    this.freeShippingfct = this.freeShippingfct.bind(this);
  }

  freeShippingfct() {
    const { product } = this.props;
    const { shipping } = product;
    const freeShipping = shipping.free_shipping;
    if (freeShipping) {
      console.log(product);
      return (<p data-testid="free-shipping">Frete Grátis</p>);
    }
  }

  render() {
    const { product: { id, thumbnail, price, title } } = this.props;
    const { product, handleProduct } = this.props;
    const detailsLinkUrl = `/product-detail/${id}`;
    return (
      <div data-testid="product">
        <Link
          to={ { pathname: detailsLinkUrl, state: { product } } }
          data-testid="product-detail-link"
        >
          <h4>{ title }</h4>
          { this.freeShippingfct() }
          <img src={ thumbnail } alt="imagemDoProduto" />
          <h5>{ price }</h5>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => handleProduct(product, 'products') }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Produtcs.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }),
  handleProduct: PropTypes.func,
}.isRequired;

export default Produtcs;
