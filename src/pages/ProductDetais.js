import '../components/styles/style.css';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import EvaluationForm from '../components/EvaluationForm';
import Evaluations from '../components/Evaluations';

class ProductDetais extends Component {
  constructor(props) {
    super(props);

    this.state = {
      evaluations: [],
      disableButton: false,
      numberOfProducts: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.newEvaluaion = this.newEvaluaion.bind(this);
    this.link = this.link.bind(this);
  }

  componentDidMount() {
    this.quantityOfProducts();
  }

  handleClick(product) {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    if (!itemsInCart) {
      product = { ...product, quantityToOrder: 1 };
      localStorage.setItem('NoMasterCart', JSON.stringify([product]));
    } else {
      const indexOfProduct = itemsInCart.findIndex((item) => item.id === product.id);
      // console.log(indexOfProduct);
      if (indexOfProduct >= 0) {
        itemsInCart[indexOfProduct].quantityToOrder += 1;
        localStorage.setItem('NoMasterCart', JSON.stringify(itemsInCart));
      } else {
        product = { ...product, quantityToOrder: 1 };
        const itemsToAdd = [...itemsInCart, product];
        localStorage.setItem('NoMasterCart', JSON.stringify(itemsToAdd));
      }
    }
    const { quantityToOrder, available_quantity: availableQuantity } = product;
    if (quantityToOrder >= availableQuantity) this.setState({ disableButton: true });
    this.quantityOfProducts();
  }

  quantityOfProducts() {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    if (itemsInCart) {
      const quantity = itemsInCart.reduce((acc, curr) => acc + curr.quantityToOrder, 0);
      this.setState({ numberOfProducts: quantity });
    }
  }

  newEvaluaion(evaluation) {
    const { evaluations } = this.state;
    this.setState({
      evaluations: [...evaluations, evaluation],
    });
  }

  link() {
    const { numberOfProducts } = this.state;
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        <div>
          <img
            src="https://img.icons8.com/fluent/48/000000/circled-left.png"
            alt="cart"
            className="button start"
          />
          <p data-testid="shopping-cart-size">{ numberOfProducts }</p>
        </div>
      </Link>
    );
  }

  render() {
    const { evaluations, disableButton } = this.state;
    const { location: { state } } = this.props;
    if (!state) return <Redirect to="/" />;
    const { product } = state;
    const {
      title, price, thumbnail, attributes, shipping: { free_shipping: free } } = product;
    return (
      <div className="productDetails">
        { this.link() }
        <h3 data-testid="product-detail-name">
          { title }
          &nbsp; - R$&nbsp;
          { parseFloat(price).toFixed(2) }
          { free && <p data-testid="free-shipping">Frete grátis</p> }
        </h3>
        <div className="containerDetails">
          <div className="contentDetails">
            <img className="imgProduct" src={ thumbnail } alt="Product" />
            <div>
              <p>Especificações Técnicas:</p>
              {attributes
                .map((atribut) => (
                  <p
                    key={ atribut.name }
                  >
                    {`${atribut.name}: ${atribut.value_name}`}
                  </p>
                ))}
            </div>
          </div>
          <button
            type="button"
            className="add"
            data-testid="product-detail-add-to-cart"
            onClick={ () => this.handleClick(product) }
            disabled={ disableButton }
          >
            Adicionar
          </button>
          <EvaluationForm onSubmit={ this.newEvaluaion } />
          <Evaluations evaluations={ evaluations } />
        </div>
      </div>
    );
  }
}

ProductDetais.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
        attributes: PropTypes.arrayOf(PropTypes.object),
        shipping: PropTypes.shape({
          free_shipping: PropTypes.bool,
        }),
      }),
    }),
  }).isRequired,
};

export default ProductDetais;
