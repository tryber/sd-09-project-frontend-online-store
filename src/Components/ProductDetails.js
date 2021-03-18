import React from 'react';
import Proptypes from 'prop-types';
import ButtonCart from './ButtonCart';
import AddToCartDetail from './AddToCartDetail';
import * as api from '../services/api';
import EvaluetProduct from './EvaluateProduct';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.requireToAPI = this.requireToAPI.bind(this);
    this.state = {
      product: '',
      attributes: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.requireToAPI(id);
  }

  requireToAPI(productID) {
    const localCategorie = localStorage.getItem('categorId');
    const categori = JSON.parse(localCategorie);
    const localTerm = localStorage.getItem('term');
    const term = JSON.parse(localTerm);
    const require = api.getProductsFromCategoryAndQuery(categori, term);
    require.then(({ results }) => {
      const objCorrect = results.find((currentValue) => (currentValue.id === productID));
      this.setState({
        product: objCorrect,
        attributes: objCorrect.attributes,
      });
    });
  }

  render() {
    const { product, attributes } = this.state;
    const { thumbnail, title, price } = product;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt="imagem do produto" />
        <p>{ `R$ ${price}` }</p>
        {attributes
          .map((atribute) => (
            <p key={ atribute.id }>
              {`${atribute.name}: ${atribute.value_name}`}
            </p>
          ))}
        <EvaluetProduct />
        <ButtonCart />
        <AddToCartDetail product={ product } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: Proptypes.arrayOf(Object).isRequired,
};

export default ProductDetails;
