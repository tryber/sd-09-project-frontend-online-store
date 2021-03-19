import React from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';
import '../App.css';
import ProductItem from './ProductItem';
import CategoryList from './CategoryList';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      json: undefined,
      searchText: '',
      categories: [],
      selectedCategories: '',
    };

    this.changeText = this.changeText.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
    this.LoadCategories = this.LoadCategories.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
    this.clickCategory = this.clickCategory.bind(this);
    this.loadProduct = this.loadProduct.bind(this);
  }

  componentDidMount() {
    this.LoadCategories();
    this.loadProduct();
  }

  componentDidUpdate(prevProp, prevState) {
    const { selectedCategories } = this.state;
    if (prevState.selectedCategories !== selectedCategories) return this.handleSearch();
  }

  async handleSearch() {
    const { searchText, selectedCategories } = this.state;
    this.setState({ loading: true });
    const searchJson = await Api
      .getProductsFromCategoryAndQuery(selectedCategories, searchText);
    this.setState({
      loading: false,
      json: searchJson,
    });
  }

  async loadProduct() {
    const searchJson = await Api.getProductsFromCategoryAndQuery();
    this.setState({
      loading: false,
      json: searchJson,
    });
  }

  clickCategory({ target }) {
    this.setState({
      selectedCategories: target.id,
    });
  }

  async LoadCategories() {
    const allCategories = await Api
      .getCategories();
    this.setState({
      categories: allCategories,
      loading: false,
    });
  }

  changeText({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  renderProducts(json) {
    if (!json) return;
    const { results } = json;
    return (
      <section className="product-list">
        {results.length === 0
          ? <span>Nenhum produto foi encontrado</span>
          : results
            .map((product) => <ProductItem key={ product.id } product={ product } />)}
      </section>
    );
  }

  renderCategories() {
    const { categories } = this.state;
    return (
      <section className="category-list">
        {categories.length === 0
          ? <span>Nenhuma categoria foi encontrada</span>
          : categories
            .map((category) => (
              <CategoryList
                key={ category.id }
                name={ category.name }
                category={ category.id }
                clickCategory={ this.clickCategory }
              />
            ))}
      </section>
    );
  }

  render() {
    const { loading, json } = this.state;
    const checkLoading = loading ? <p>Loading...</p> : this.renderProducts(json);
    return (
      <div className="home">
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.changeText }
        />
        <button
          type="button"
          onClick={ this.handleSearch }
          data-testid="query-button"
        >
          Search
        </button>
        <Link to="/cart" data-testid="shopping-cart-button">CARRINHO</Link>
        <p
          data-testid="home-initial-message"
          className="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div className="home-results">
          { this.renderCategories() }
          { checkLoading }
        </div>
      </div>
    );
  }
}

export default ProductList;
