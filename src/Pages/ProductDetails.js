import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ButtonShoppingCart from '../components/ButtonShoppingCart';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: 0,
      title: '',
      thumbnail: '',
      price: '',
      loading: true,
    };
    this.fetchProduct = this.fetchProduct.bind(this);
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
      // id: requestProduct.id,
      title: product.title,
      thumbnail: product.thumbnail,
      price: product.price,
      attributes: product.attributes,
      loading: false,
    });
  }

  render() {
    const { title, thumbnail, price, attributes, loading } = this.state;

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
        </div>
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
