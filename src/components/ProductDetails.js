import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import '../styles/components/ProductDetails.css';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import ProductEvaluation from './ProductEvaluation';
import CartIcon from './CartIcon';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };

    this.getItemProduct = this.getItemProduct.bind(this);
    this.elementsLinks = this.elementsLinks.bind(this);
    this.elementsDetails = this.elementsDetails.bind(this);
    this.buttonElement = this.buttonElement.bind(this);
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

  elementsLinks() {
    const { cartLength } = this.props;
    return (
      <div className="links-back-cart">
        <Link to="/">
          <button className="shopping-cart-button" type="button" alt="return-button" />
        </Link>
        <CartIcon cartLength={ cartLength } />
      </div>
    );
  }

  elementsDetails() {
    const { product } = this.state;
    const { title, price, condition, address, installments } = product;
    const { quantity } = installments;
    const { state_id, state_name } = address;
    const numberOfStars = 5;
    const stars = 4;
    return (
      <div>
        <p>{title}</p>
        <p>{`Condição: ${condition ? 'NOVO' : 'USADO'}`}</p>
        <p>{`Localização: ${state_name}-${state_id}`}</p>
        <p>{`Qtd: ${quantity}`}</p>
        {[...Array(numberOfStars)].map((star, i) => {
          const starRating = i + 1;
          return (
            <label htmlFor={ `${star} ${starRating}` } key={ i }>
              <FaStar
                size={ 20 }
                color={ starRating < stars ? '#ffc107' : '#b1b8cf' }
              />
            </label>
          );
        })}
        <p>{`R$ ${price}`}</p>
      </div>
    );
  }

  buttonElement() {
    const { product } = this.state;
    const { id } = product;
    const { addProductToCart } = this.props;
    return (
      <div id={ id }>
        <button
          className="button-prod-details"
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addProductToCart(id) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }

  render() {
    const { product } = this.state;
    if (product === undefined) {
      return <Redirect to="/" />;
    }

    if (product.length === 0) return (<div> Page not Found! </div>);

    const { title, thumbnail } = product;
    return (
      <>
        <div>
          {this.elementsLinks()}
        </div>
        <div data-testid="product-detail-name" className="card">
          <div className="img-card">
            <img src={ thumbnail } alt={ title } />
          </div>
          <div className="content-card">
            {this.elementsDetails()}
            {this.buttonElement()}
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
