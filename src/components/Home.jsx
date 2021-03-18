import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from './CategoriesList';
import Button from './Button';
import Card from './Card';
import * as api from '../services/api';

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
        <form>
          <label htmlFor="pesquisar" data-testid="home-initial-message">
            <input
              name="pesquisar"
              type="text"
              data-testid="query-input"
              onChange={ (event) => {
                this.setState({
                  inputValue: event.target.value,
                });
              } }
            />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
          <Button activateButton={ this.activateButton } />
        </form>
        <Link to="/shopping-cart" data-testid="shopping-cart-button"> Cart </Link>
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
    );
  }
}

export default Home;
