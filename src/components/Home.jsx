import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CategoriesList from './CategoriesList';
import Button from './Button';
import Card from './Card';
import * as api from '../services/api';

import '../App.css';

class Home extends Component {
  constructor() {
    super();

    this.activateButton = this.activateButton.bind(this);

    this.state = {
      productsContent: [],
      inputValue: '',
      status: false,
      CategoryId: '',
    };
  }

  async activateButton(event) {
    const category = event.target.className;
    console.log(category);
    const { inputValue } = this.state;
    const response = await api.getProductsFromCategoryAndQuery(category, inputValue);
    const jsonResults = await response.results;
    this.setState({
      productsContent: jsonResults,
      status: true,
    });
    return response;
  }

  render() {
    const { productsContent, status, CategoryId } = this.state;
    return (
      <div>
        <form className="header-app">
          <h2>
            <span>e</span>
            Shop
          </h2>
          <div className="input-container">
            <label htmlFor="pesquisar" data-testid="home-initial-message">
              <input
                name="pesquisar"
                type="text"
                data-testid="query-input"
                placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
                className="search-input"
                onChange={ (event) => {
                  this.setState({
                    inputValue: event.target.value,
                  });
                } }
              />
            </label>
            <Button activateButton={ this.activateButton } />
          </div>
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <FontAwesomeIcon
              icon={ faShoppingCart }
              color="#1e272e"
              style={ { fontSize: '20px' } }
            />
          </Link>
        </form>
        <div className="main-content">
          <CategoriesList
            getIdToState={ this.getIdToState }
            activateButton={ this.activateButton }
          />
          <Card
            productsContent={ productsContent }
            status={ status }
            CategoryId={ CategoryId }
          />
        </div>
      </div>
    );
  }
}

export default Home;
