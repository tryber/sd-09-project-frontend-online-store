import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import CategoriesList from '../components/CategoriesList';
import ButtonShoppingCart from '../components/ButtonShoppingCart';
import ProductCard from '../components/ProductCard';

class ProductsShowcase extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriesArray: '',
      searchText: '',
      categoryId: '',
      products: [],
    };
    this.inputChange = this.inputChange.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    return api.getCategories().then((categories) => (
      this.setState({ categoriesArray: categories })
    ));
  }

  inputChange(event) {
    return this.setState({ searchText: event.target.value });
  }

  async fetchProducts() {
    const { categoryId, searchText } = this.state;
    const requestProducts = await
    api.getProductsFromCategoryAndQuery(categoryId, searchText);
    this.setState({ products: requestProducts.results });
  }

  render() {
    const { categoriesArray, products, searchText } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          onChange={ this.inputChange }
          value={ searchText }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.fetchProducts }
        >
          Busca
        </button>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <ButtonShoppingCart />
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesList
          categoriesArray={ categoriesArray }
        />
        {products.length === 0
          ? <p>Nenhum produto foi encontrado</p>
          : products
            .map((product) => <ProductCard key={ product.id } product={ product } />)}
      </div>
    );
  }
}

export default ProductsShowcase;
