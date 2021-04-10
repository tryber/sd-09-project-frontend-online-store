import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCategory from '../components/ProductCategory';
import ProductCard from '../components/ProductCard';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      productList: [],
      renderCategories: false,
      renderProductList: false,
      searchBar: '',
      selectedCategory: '',
      cartProducts: [],
      cartSize: 0,
    };
    this.handleCategories = this.handleCategories.bind(this);
    this.searchBarHandler = this.searchBarHandler.bind(this);
    this.searchButtonHandler = this.searchButtonHandler.bind(this);
    this.renderCategory = this.renderCategory.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
    this.cartListToLocalStorage = this.cartListToLocalStorage.bind(this);
    this.loadCartListFromStorage = this.loadCartListFromStorage.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
    this.loadCartListFromStorage();
  }

  handleCategories({ target: { value } }) {
    const { searchBar } = this.state;
    this.setState({ selectedCategory: value });
    this.fetchProductList(value, searchBar);
  }

  searchBarHandler({ target: { value } }) {
    this.setState({ searchBar: value });
  }

  searchButtonHandler() {
    const { selectedCategory, searchBar } = this.state;
    this.fetchProductList(selectedCategory, searchBar);
  }

  loadCartListFromStorage() {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const cartSize = parseInt(localStorage.getItem('cartSize') || 0, 10);
    this.setState({ cartProducts, cartSize });
  }

  cartListToLocalStorage() {
    const { cartProducts, cartSize } = this.state;
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    localStorage.setItem('cartSize', cartSize);
  }

  addProductToCart(product) {
    const { cartProducts } = this.state;
    if (cartProducts.some((cartProduct) => cartProduct.id === product.id)) {
      const newCart = cartProducts.map((cartProduct) => {
        const { available_quantity: productQuantity } = product;
        if (cartProduct.id === product.id && cartProduct.quantity < productQuantity) {
          return { ...cartProduct, quantity: cartProduct.quantity + 1 };
        }
        return cartProduct;
      });
      this.setState((state) => ({
        cartProducts: newCart,
        cartSize: state.cartSize + 1,
      }), () => this.cartListToLocalStorage());
    } else {
      product.quantity = 1;
      this.setState((state) => ({
        cartProducts: [...state.cartProducts, product],
        cartSize: state.cartSize + 1,
      }), () => this.cartListToLocalStorage());
    }
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({ categories, renderCategories: true });
  }

  async fetchProductList(categoryId, query) {
    const { results } = await getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ productList: results, renderProductList: true });
  }

  renderCategory() {
    const { renderCategories, categories } = this.state;
    if (renderCategories) {
      return categories.map(
        (item) => (<ProductCategory
          key={ item.id }
          category={ item }
          onChange={ this.handleCategories }
        />),
      );
    }
  }

  renderProducts() {
    const { renderProductList, productList, cartProducts, cartSize } = this.state;
    if (!renderProductList) {
      return (
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      );
    }
    if (productList.length === 0) {
      return (
        <h1>Nenhum produto foi encontrado</h1>
      );
    }
    if (productList) {
      return (
        productList.map((product) => (
          <div key={ product.id }>
            <ProductCard
              key={ product.id }
              product={ product }
              cartSize={ cartSize }
              cartProducts={ cartProducts }
              onClick={ this.addProductToCart }
            />
          </div>
        ))
      );
    }
  }

  render() {
    const { searchBar, cartProducts, cartSize } = this.state;
    return (
      <div className="main-page">
        <aside className="categories-list">
          { this.renderCategory() }
        </aside>
        <div className="product-list">
          <input
            data-testid="query-input"
            className="main-search"
            type="text"
            value={ searchBar }
            onChange={ this.searchBarHandler }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.searchButtonHandler }
          >
            Search
          </button>
          <Link
            data-testid="shopping-cart-button"
            to={ {
              pathname: '/shopping-cart',
              state: { cartProducts },
            } }
          >
            Carrinho de compras
            &#40;
            <span data-testid="shopping-cart-size">
              { cartSize }
            </span>
            &#41;
          </Link>
          <div>
            { this.renderProducts() }
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
