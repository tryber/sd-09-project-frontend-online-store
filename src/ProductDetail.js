import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductEvaluation from './ProductEvaluation';
import CartQuantity from './CartQuantity';
import carticon from './cartIcon.svg';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.freeShippingfct = this.freeShippingfct.bind(this);
  }

  freeShippingfct() {
    const { location: { state: { product: { shipping } } } } = this.props;
    const freeShipping = shipping.free_shipping;
    if (freeShipping) {
      return ('Frete Grátis');
    }
  }

  render() {
    const { totalProducts, handleProduct, location: { state: { product } } } = this.props;
    return (
      <div>
        <Link to="/">Voltar</Link>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img style={ { height: '25px' } } src={ carticon } alt="Cart icon" />
          <CartQuantity totalProducts={ totalProducts } />
        </Link>
        <h4 data-testid="product-detail-name">
          { product.title }
        </h4>
        { this.freeShippingfct() }
        <img src={ product.thumbnail } alt="imagemDoProduto" />
        <h5>
          { product.price }
        </h5>
        <h6>
          Especificações Técnicas:
        </h6>
        <ul>
          {
            product.attributes.map((attribute) => (
              <li key={ attribute.id }>
                { attribute.name }
                :
                { attribute.value_name }
              </li>))
          }
        </ul>
        <ProductEvaluation />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => handleProduct(product, 'products') }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}
ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string,
        attributes: PropTypes.arrayOf(PropTypes.object),
        thumbnail: PropTypes.string,
        price: PropTypes.number,
        title: PropTypes.string,
        shipping: PropTypes.shape({
          free_shipping: PropTypes.bool.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  handleProduct: PropTypes.func.isRequired,
  totalProducts: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default ProductDetail;
