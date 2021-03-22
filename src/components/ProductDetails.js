import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import '../styles/components/ProductDetails.css';
import { Link } from 'react-router-dom';
import ProductEvaluation from './ProductEvaluation';
import CartIcon from './CartIcon';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };

    this.getItemProduct = this.getItemProduct.bind(this);
  }

  componentDidMount() {
    this.getItemProduct();
  }

  getItemProduct() {
    const { match, products } = this.props;
    const { params } = match;
    const { ship } = params;
    const product = products.find((item) => item.id === ship);
    this.setState({
      product,
    });
  }

  render() {
    const { product } = this.state;
    if (product === undefined) {
      return <Redirect to="/" />;
    }

    const { title, thumbnail, price, id, condition } = product;
    const { addProductToCart, cartLength } = this.props;

    return (
      <>
        <div className="links-back-cart">
          <Link to="/">
            <button className="shopping-cart-button" type="button" alt="return-button" />
          </Link>
          <CartIcon cartLength={ cartLength } />
        </div>
        <div data-testid="product-detail-name" className="card">
          <div className="img-card">
            <img src={ thumbnail } alt={ title } />
          </div>
          <div className="content-card">
            <p>{title}</p>
            <p>{`Condição ${condition ? 'NOVO' : 'default'}`}</p>
            <p>{`R$${price}`}</p>
            <div id={ id }>
              <button
                type="button"
                data-testid="product-detail-add-to-cart"
                onClick={ () => addProductToCart(id) }
              >
                Adicionar ao carrinho
              </button>
            </div>
            <ProductEvaluation />
          </div>
        </div>
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      ship: PropTypes.string,
    }),
  }).isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  addProductToCart: PropTypes.func.isRequired,
  cartLength: PropTypes.number.isRequired,
};

export default ProductDetails;
