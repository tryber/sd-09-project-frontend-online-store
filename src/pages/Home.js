import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard/ProductCard';
import * as api from '../services/api';
import Categories from '../Components/Categories/Categories';
import Loading from '../Components/Loading/Loading';
import CounterCart from '../Components/CounterCart/CounterCart';
import Cart from '../services/Data';

export default class Home extends Component {
  constructor(state) {
    super(state);

    this.setSearchText = this.setSearchText.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.CounterCart = this.CounterCart.bind(this);

    this.state = {
      searchText: '',
      productList: [],
      loading: false,
      quant: 0,
    };
  }

  componentDidMount() {
    this.CounterCart();
  }

  async handleCategory({ target }) {
    this.setState({ loading: true });
    const { searchText } = this.state;
    await api.getProductsFromCategoryAndQuery(target.value, searchText)
      .then((response) => {
        const list = response.results;
        this.setState({ productList: list });
      });
    this.setState({ loading: false });
  }

  setSearchText({ target }) {
    this.setState({ searchText: target.value });
  }

  CounterCart() {
    let counter = 0;
    Cart.forEach((product) => { counter += product.quantity; });
    this.setState({ quant: counter });
  }

  render() {
    const { productList, loading, searchText, quant } = this.state;
    return (
      <div className="App">
        <input
          id="searchInput"
          type="text"
          data-testid="query-input"
          onChange={ this.setSearchText }
        />
        <button type="button" onClick={ this.handleCategory } data-testid="query-button">
          Pesquisar
        </button>
        <button type="button">
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            Carrinho de Compras
            <CounterCart quant={ quant } />
          </Link>
        </button>
        <button type="button">
          <Link to="/Checkout" data-testid="checkout-products">
            checkout
          </Link>
        </button>
        <div className="left-side">
          <Categories handleCategory={ this.handleCategory } />
        </div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ul>
          { (loading) ? <Loading /> : null }
          {productList
            .map((product) => (
              <ProductCard
                key={ product.id }
                product={ product }
                text={ searchText }
                click={ this.CounterCart }
              />
            ))}
        </ul>
      </div>
    );
  }
}
