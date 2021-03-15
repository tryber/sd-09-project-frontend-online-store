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
      cartProductsId: [],
    };
    this.inputChange = this.inputChange.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.onChangeCategoriesInput = this.onChangeCategoriesInput.bind(this);
    this.addProductsToCart = this.addProductsToCart.bind(this);
  }

  componentDidMount() {
    return api.getCategories().then((categories) => (
      this.setState({ categoriesArray: categories })
    ));
  }

  async onChangeCategoriesInput({ target }) {
    const productsByCategory = await api.getProductsFromCategoryAndQuery(target.value);
    this.setState({
      products: productsByCategory.results,
    });
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

  addProductsToCart(product) {
    this.setState((estadoAnterior) => ({
      cartProductsId: [...estadoAnterior.cartProductsId, product],
    }));
  }

  renderLinkToCart(cartProductsId) {
    return (
      <Link
        data-testid="shopping-cart-button"
        to={ {
          pathname: '/shopping-cart',
          state: { cartProductsId },
        } }
      >
        <ButtonShoppingCart />
      </Link>
    );
  }

  render() {
    const { categoriesArray, products, searchText, cartProductsId } = this.state;
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
        {this.renderLinkToCart(cartProductsId)}

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesList
          categoriesArray={ categoriesArray }
          onChangeCategoriesInput={ this.onChangeCategoriesInput }
        />
        {products.length === 0
          ? <p>Nenhum produto foi encontrado</p>
          : products
            .map((product) => (
              <ProductCard
                key={ product.id }
                product={ product }
                addProductsToCart={ this.addProductsToCart }
              />))}
      </div>
    );
  }
}

export default ProductsShowcase;
