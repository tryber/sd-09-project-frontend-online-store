import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ButtonShoppingCart from '../components/ButtonShoppingCart';
import ReactStars from '../../node_modules/react-rating-stars-component';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      thumbnail: '',
      price: '',
      loading: true,
      storedProducts: [],
      productObj: undefined,
    };
    this.fetchProduct = this.fetchProduct.bind(this);
    this.addProductsToCart = this.addProductsToCart.bind(this);
  }

  componentDidMount() {
    this.fetchProduct();
  }

  // logica baseada no code review do SantosDiv
  async fetchProduct() {
    const { match } = this.props;
    const { idCategory, idProduct } = match.params;
    const requestProduct = await getProductsFromCategoryAndQuery(idCategory, '');
    const product = requestProduct.results.find(({ id }) => id === idProduct);
    console.log(product);
    this.setState({
      title: product.title,
      thumbnail: product.thumbnail,
      price: product.price,
      attributes: product.attributes,
      loading: false,
      productObj: product,
    });
  }

  addProductsToCart() {
    this.setState(({ storedProducts, productObj }) => ({
      storedProducts: [...storedProducts, productObj],
    }));
  }

  renderLinkToCart(cartProductsId) {
    return (
      <Link
        data-testid="shopping-cart-button"
        to={ {
          pathname: '/shopping-cart',
          state: { cartProductsId },
        } }
      >
        <ButtonShoppingCart />
      </Link>
    );
  }

  render() {
    const { title, thumbnail, price, attributes, loading, storedProducts } = this.state;
    const ratingChanged = (newRating) => {
      console.log(newRating);
    };
    if (loading) return <p>Carregando...</p>;

    return (
      <div>
        <Link to="/shopping-cart">
          <ButtonShoppingCart />
        </Link>

        <div>
          <h2 data-testid="product-detail-name">{title}</h2>
          <img alt="" src={ thumbnail } />
          <h3>{`R$ ${price}`}</h3>
          <ol>
            {attributes.length > 0 && attributes.map(({ id, name, values }) => (
              <li key={ id }>{`${name} : ${values[0].name}`}</li>))}
          </ol>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ this.addProductsToCart }
          >
            Adicionar ao carrinho
          </button>
          <input placeholder="Email" />
          <ReactStars
            count={ 5 }
            onChange={ ratingChanged }
            size={ 24 }
            activeColor="#ffd700"
          />
          <textarea data-testid="product-detail-evaluation" />
        </div>
        {this.renderLinkToCart(storedProducts)}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      idCategory: PropTypes.string,
      idProduct: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
