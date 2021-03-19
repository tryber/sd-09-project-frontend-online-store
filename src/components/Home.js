import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Categories from './Categories';
import SearchCard from './SearchCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchbar: '',
      response: [],
      emptyResponse: false,
      filterId: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.filterById = this.filterById.bind(this);
  }

  async handleClick() {
    const { searchbar, filterId } = this.state;
    getProductsFromCategoryAndQuery(filterId, searchbar).then(({ results }) => {
      if (searchbar.length > 0 && results.length === 0) {
        this.setState({
          emptyResponse: true,
        });
      } else {
        this.setState({
          emptyResponse: false,
          response: results,
        });
      }
    });
  }

  filterById(id) {
    this.setState({ filterId: id }, () => this.handleClick());
  }

  render() {
    const { response, emptyResponse } = this.state;
    const { addToCart, handleCartItemsQuantity, cartItemsQuantity } = this.props;
    return (
      <>
        <section>
          <input
            data-testid="query-input"
            onChange={ (event) => this.setState({
              searchbar: event.target.value,
            }) }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
          <Link data-testid="shopping-cart-button" to="/carrinho">
            <i className="fas fa-shopping-cart" />
            <span data-testid="shopping-cart-size">{cartItemsQuantity}</span>
          </Link>
        </section>
        <section>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </section>
        <section>
          <Categories
            filterId={ this.filterById }
            handleCartItemsQuantity={ handleCartItemsQuantity }
          />
        </section>
        <section>
          <SearchCard
            result={ response }
            response={ emptyResponse }
            addToCart={ addToCart }
            handleCartItemsQuantity={ handleCartItemsQuantity }
          />
        </section>
      </>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func,
}.isRequired;

export default Home;
