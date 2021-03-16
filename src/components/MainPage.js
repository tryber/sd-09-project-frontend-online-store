import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';
import CardItem from './CardItem';

import shoppingCartIcon from '../images/shopping_cart_black.svg';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: '',
      searchCategory: '',
      items: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleInput({ target }) {
    this.setState({
      searchBar: target.value,
    });
  }

  handleCategory({ target }) {
    this.setState({
      searchCategory: target.value,
    }, () => this.handleButton());
  }

  async handleButton() {
    const { searchBar, searchCategory } = this.state;
    const response = await getProductsFromCategoryAndQuery(searchCategory, searchBar);
    this.setState({
      items: response.results,
    });
  }

  render() {
    const { searchBar, items } = this.state;
    const { handleCart, sumToCart, itemsQtt } = this.props;
    return (
      <div>
        <div>
          <input
            type="text"
            data-testid="query-input"
            value={ searchBar }
            onChange={ this.handleInput }
          />
          <button
            type="button"
            onClick={ this.handleButton }
            data-testid="query-button"
          >
            Pesquisar
          </button>
        </div>
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img src={ shoppingCartIcon } alt="Icone do Carrinho de Compras" />
          <p data-testid="shopping-cart-size">{ itemsQtt }</p>
        </Link>
        <div>
          <Categories onClick={ this.handleCategory } />
        </div>
        <div>
          {items.length < 1
            ? <h3>Nenhum produto foi encontrado</h3>
            : items.map((obj) => (
              <CardItem
                item={ obj }
                key={ obj.id }
                handleCart={ handleCart }
                sumToCart={ sumToCart }
              />
            ))}
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  handleCart: PropTypes.func,
  sumToCart: PropTypes.func,
}.isRequired;

export default MainPage;
