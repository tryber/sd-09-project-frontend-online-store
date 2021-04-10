import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as fetchFunctions from '../services/api';
import '../styles/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
    this.searchItemsByQuery = this.searchItemsByQuery.bind(this);
    this.handleState = this.handleState.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.renderNoItemsMessage = this.renderNoItemsMessage.bind(this);
    this.searchItemsByCategorie = this.searchItemsByCategorie.bind(this);
    this.putOnLocalStorage = this.putOnLocalStorage.bind(this);
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);

    this.state = {
      searchQuery: '',
      categorieSet: '',
      products: '',
      categories: [],
      quantity: 0,
    };
  }

  componentDidMount() {
    this.fetchCategories();
    this.getFromLocalStorage();
    this.updateQuantity();
  }

  handleState({ target }) {
    const { name } = target;
    if (name === 'categorieSet') {
      this.setState({
        [name]: target.value,
      }, this.searchItemsByCategorie);
    }
    this.setState({
      [name]: target.value,
    });
  }

  getFromLocalStorage() {
    if (localStorage.getItem('cartItems')) {
      const items = localStorage.getItem('cartItems');
      return JSON.parse(items);
    }
    return [];
  }

  updateQuantity() {
    const itens = this.getFromLocalStorage();
    const quantity = itens
      .reduce((total, currentyValue) => total + currentyValue.qtd, 0);
    this.setState((state) => ({ ...state, quantity }));
  }

  putOnLocalStorage(product) {
    const products = [...this.getFromLocalStorage()];
    let status = true;
    products.forEach((item) => {
      if (item.id === product.id && item.available_quantity > item.qtd) {
        item.qtd += 1;
        status = false;
      }
      if (item.id === product.id) status = false;
    });
    if (status && product.available_quantity > 0) {
      product = { ...product, qtd: 1 };
      products.push(product);
    }
    localStorage.setItem('cartItems', JSON.stringify(products));
    this.updateQuantity();
  }

  async searchItemsByCategorie() {
    const { categorieSet } = this.state;
    const items = await fetchFunctions
      .getProductsFromCategoryAndQuery(categorieSet, undefined);
    this.setState({
      products: items.results,
    });
  }

  async searchItemsByQuery() {
    const { searchQuery } = this.state;
    const items = await fetchFunctions
      .getProductsFromCategoryAndQuery(undefined, searchQuery);
    this.setState({
      products: items.results,
    });
  }

  async fetchCategories() {
    const categories = await fetchFunctions.getCategories();
    this.setState({
      categories,
    });
  }

  renderNoItemsMessage() {
    return (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
  }

  renderCategories() {
    const { categories } = this.state;
    return categories.map(
      (categorie) => (
        <button
          className="categoriesBtn"
          data-testid="category"
          type="button"
          name="categorieSet"
          key={ categorie.id }
          onClick={ this.handleState }
          value={ categorie.id }
        >
          {categorie.name}
        </button>),
    );
  }

  renderItems() {
    const { products } = this.state;
    return products.map((product) => (
      <div data-testid="product" key={ product.id }>
        <p>{product.title}</p>
        <img alt="" src={ product.thumbnail } />
        <p>Frete</p>
        {(product.shipping.free_shipping)
          && <p data-testid="free-shipping">Frete Grátis</p>}
        <Link
          to={ {
            pathname: '/productdetails',
            state: product,
          } }
          data-testid="product-detail-link"
          product={ product }
        >
          Detalhes
        </Link>
        <button
          type="button"
          props={ product }
          data-testid="product-add-to-cart"
          onClick={ () => this.putOnLocalStorage(product) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    ));
  }

  render() {
    const { products, quantity } = this.state;
    return (
      <main>
        <section className="categories">
          <h4>Categorias</h4>
          {this.renderCategories()}
        </section>
        <section className="products">
          <div className="search">
            <input
              data-testid="query-input"
              name="searchQuery"
              type="text"
              onChange={ this.handleState }
            />
            <button
              data-testid="query-button"
              type="button"
              onClick={ this.searchItemsByQuery }
            >
              Buscar
            </button>
            <Link
              className="link-quantity"
              to="/cart"
              data-testid="shopping-cart-button"
            >
              <img src="cart-icon.png" alt="cart-icon" />
              <span
                className="span-quantity"
                data-testid="shopping-cart-size"
              >
                { quantity }
              </span>
            </Link>
          </div>
          {(products) && this.renderItems()}
          {(!products) && this.renderNoItemsMessage()}
        </section>
      </main>
    );
  }
}

export default Home;
