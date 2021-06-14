import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ListCategories from './ListCategories';
import Card from '../components/Card';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      search: '',
      numberOfProducts: 0,
    };

    this.fetchProductsByQuery = this.fetchProductsByQuery.bind(this);
    this.fetchProductsByCategoryId = this.fetchProductsByCategoryId.bind(this);
    this.hendleChange = this.hendleChange.bind(this);
    this.inputButton = this.inputButton.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.quantityOfProducts = this.quantityOfProducts.bind(this);
    this.productsContent = this.productsContent.bind(this);
  }

  componentDidMount() {
    this.quantityOfProducts();
  }

  handleAddClick(product) {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    if (!itemsInCart) {
      product = { ...product, quantityToOrder: 1 };
      localStorage.setItem('NoMasterCart', JSON.stringify([product]));
    } else {
      const indexOfProduct = itemsInCart.findIndex((item) => item.id === product.id);
      if (indexOfProduct >= 0) {
        itemsInCart[indexOfProduct].quantityToOrder += 1;
        localStorage.setItem('NoMasterCart', JSON.stringify(itemsInCart));
      } else {
        product = { ...product, quantityToOrder: 1 };
        const itemsToAdd = [...itemsInCart, product];
        localStorage.setItem('NoMasterCart', JSON.stringify(itemsToAdd));
      }
    }
    this.quantityOfProducts();
  }

  quantityOfProducts() {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    if (itemsInCart) {
      const quantity = itemsInCart.reduce((acc, curr) => acc + curr.quantityToOrder, 0);
      this.setState({ numberOfProducts: quantity });
    }
  }

  async fetchProductsByQuery() {
    const { search } = this.state;
    const items = await getProductsFromCategoryAndQuery(false, search);
    this.setState({
      products: items.results,
    });
  }

  async fetchProductsByCategoryId(categoryId) {
    const items = await getProductsFromCategoryAndQuery(categoryId, false);
    this.setState({
      products: items.results,
    });
  }

  hendleChange(event) {
    const { value } = event.target;
    this.setState({
      search: value,
    });
  }

  productsContent() {
    const { products } = this.state;
    if (products.length === 0) {
      return (
        <h3 className="subtitle" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      );
    }
    return (
      <div className="products">
        { products
          .map((product) => (
            <Card
              product={ product }
              key={ product.id }
              handleAddClick={ this.handleAddClick }
            />
          ))}
      </div>
    );
  }

  inputButton() {
    const { numberOfProducts } = this.state;
    return (
      <div className="inputContent">
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.hendleChange }
          className="queryInput"
          placeholder=" 🔍"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => this.fetchProductsByQuery() }
          className="queryButton"
        >
          Pesquisar
        </button>
        <Link className="cartHome" to="/cart" data-testid="shopping-cart-button">
          <img
            src="https://img.icons8.com/fluent/48/000000/shopping-cart-loaded.png"
            alt="cart"
            className="button"
          />
          <span
            className="qtd"
            data-testid="shopping-cart-size"
          >
            { numberOfProducts }
          </span>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="landingPage">
        <ListCategories onChange={ this.fetchProductsByCategoryId } />
        <div className="container">
          { this.inputButton() }
          { this.productsContent() }
        </div>
      </div>
    );
  }
}

export default LandingPage;
