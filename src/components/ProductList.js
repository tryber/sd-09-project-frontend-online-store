import React, { Component } from 'react';
import * as Api from '../services/api';
import ProductItem from './ProductItem';
import Categories from './Categories';
import CartButton from './CartButton';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      query: '',
      category: '',
    };

    this.userInput = this.userInput.bind(this);
    this.loadProducts = this.loadProducts.bind(this);
    this.filterCategory = this.filterCategory.bind(this);
  }

  userInput({ target }) {
    const { value } = target;
    this.setState((props) => (
      {
        ...props,
        query: value,
      }
    ));
  }

  loadProducts() {
    const { query } = this.state;
    const result = Api.getProductsFromCategoryAndQuery(query, query);
    result.then(
      (res) => {
        this.setState(() => ({
          ...res,
          products: res.results,
        }));
      },
    );
  }

  async filterCategory(event) {
    const { value } = event.target;
    const productsFromCategory = await Api.getProductsFromCategoryAndQuery(value);
    this.setState({
      products: productsFromCategory.results,
      category: value,
    });
  }

  render() {
    const { query, products } = this.state;
    return (
      <main>
        <header className="header-container">
          <div className="search-container">
            <input
              value={ query }
              onChange={ this.userInput }
              data-testid="query-input"
              type="text"
            />
            <button
              data-testid="query-button"
              onClick={ this.loadProducts }
              type="button"
            >
              Buscar
            </button>
            <CartButton />
          </div>
        </header>
        <section className="body-container">
          <Categories onChange={ this.filterCategory } />
          <div className="card-container">
            {
              products.length !== 0 ? products.map((product) => (
                <ProductItem
                  key={ product.id }
                  title={ product.title }
                  price={ product.price }
                  image={ product.thumbnail }
                  id={ product.id }
                />
              )) : (
                <p data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </p>
              )
            }
          </div>
        </section>
      </main>
    );
  }
}

export default ProductList;
