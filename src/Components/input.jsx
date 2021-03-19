import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import * as api from '../services/api';
import ItemCard from './itemCard';
import CategoriesList from './categoriesList';
import dataCart from '../services/dataCart';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      inputValue: '',
      categoryValue: '',
      cartCounter: 0,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.globalCounter = this.globalCounter.bind(this);
  }

  componentDidMount() {
    this.globalCounter();
  }

  handleInput({ target }) {
    this.setState({ inputValue: target.value });
  }

  handleCategory({ target }) {
    this.setState({ categoryValue: target.value }, () => (
      this.handleButton()
    ));
  }

  handleButton() {
    const { inputValue, categoryValue } = this.state;
    console.log(categoryValue);
    api.getProductsFromCategoryAndQuery(categoryValue, inputValue)
      .then((queryValue) => {
        this.setState({ products: queryValue });
      });
  }

  globalCounter() {
    let counter = 0;
    dataCart.array.forEach((product) => { counter += product.quantity; });
    this.setState({ cartCounter: counter });
  }

  render() {
    const { products, inputValue, cartCounter } = this.state;
    return (
      <div>
        <input
          value={ inputValue }
          type="text"
          data-testid="query-input"
          onChange={ this.handleInput }
        />
        <button type="button" data-testid="query-button" onClick={ this.handleButton }>
          <FaSearch />
        </button>
        <Link to="/cart" data-testid="shopping-cart-button">
          <FaShoppingCart />
        </Link>
        <p data-testid="shopping-cart-size">{ cartCounter }</p>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesList handleCat={ this.handleCategory } />
        <div>
          {products.length < 1 ? <p>Nenhum produto foi encontrado</p>
            : products.results.map((item) => (
              <ItemCard
                key={ item.id }
                products={ item }
                globalCounter={ this.globalCounter }
                cartCounter={ cartCounter }
              />))}
        </div>
      </div>
    );
  }
}

export default Input;
