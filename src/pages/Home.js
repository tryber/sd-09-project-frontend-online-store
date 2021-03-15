import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      categories: [],
      productsInput: '',
      categoriesInput: '',
      shoppingCart: [],
      loaded: false,
      clicked: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkSearchResult = this.checkSearchResult.bind(this);
    this.addOnCart = this.addOnCart.bind(this);
    this.checkStorage = this.checkStorage.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
    this.checkStorage();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { productsInput, categoriesInput } = this.state;
    api.getProductsFromCategoryAndQuery(categoriesInput, productsInput)
      .then((products) => this.setState({
        productList: products.results,
        loaded: true,
      }));
  }

  addOnCart(title, id, price, availableQuantity) {
    this.setState((state) => ({
      shoppingCart: [...state.shoppingCart, { title, id, price, availableQuantity }],
      clicked: {
        ...state.clicked,
        [id]: true,
      },
    }), () => {
      const { shoppingCart } = this.state;
      sessionStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    });
  }

  checkSearchResult() {
    const { productList, loaded } = this.state;
    if (productList <= 0 && loaded) {
      return (
        <h3>Nenhum produto foi encontrado</h3>
      );
    }
  }

  async fetchCategories() {
    this.setState({ categories: await api.getCategories() });
  }

  mapCategory() {
    const { categories, categoriesInput } = this.state;
    return categories.map(
      ({ id, name }) => (
        <label key={ id } data-testid="category" htmlFor={ id }>
          <input
            type="checkbox"
            name="categoriesInput"
            id={ id }
            onChange={ this.handleChange }
            onClick={ this.handleClick }
            value={ name }
            checked={ categoriesInput === name }
          />
          { name }
        </label>
      ),
    );
  }

  checkStorage() {
    if (sessionStorage.shoppingCart) {
      const cart = JSON.parse(sessionStorage.shoppingCart);
      this.setState({
        shoppingCart: [...cart],
      });
    }
  }

  renderProductList() {
    const { productList, clicked } = this.state;
    return (
      productList
        .map(({ id,
          title,
          price,
          thumbnail,
          attributes,
          available_quantity: availableQuantity,
          shipping: { free_shipping: freeShipping },
        }) => (
          <div key={ id } data-testid="product" className="product-box">
            <h3>{ title }</h3>
            {freeShipping && <p data-testid="free-shipping">Frete grátis</p>}
            <img src={ thumbnail } alt={ title } />
            <p>
              R$
              { price }
            </p>
            <div className="detail-add-cart">
              <Link
                data-testid="product-detail-link"
                to={ {
                  pathname: `/productdetails/${id}`,
                  state: {
                    id,
                    title,
                    price,
                    thumbnail,
                    attributes,
                    availableQuantity,
                    freeShipping },
                } }
              >
                Detalhes do Produto
              </Link>
              <button
                type="button"
                data-testid="product-add-to-cart"
                onClick={ () => this.addOnCart(title, id, price, availableQuantity) }
                disabled={ clicked[id] }
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))
    );
  }

  renderShoppingCart() {
    const { shoppingCart } = this.state;
    return (
      <Link to="/shoppingCart">
        <button
          type="button"
          data-testid="shopping-cart-button"
          className="cart-button"
        >
          ShoppingCart
          <span data-testid="shopping-cart-size">{` - ${shoppingCart.length}`}</span>
        </button>
      </Link>
    );
  }

  render() {
    const { productsInput, productList } = this.state;
    return (
      <div className="home-container">
        <aside>
          <div>
            { this.mapCategory() }
          </div>
        </aside>
        <div className="main-container">
          <div className="search-cart-container">
            <input
              type="text"
              placeholder="Digite aqui"
              value={ productsInput }
              onChange={ this.handleChange }
              data-testid="query-input"
              name="productsInput"
              className="search-input"
            />
            { this.renderShoppingCart() }
          </div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <button
            type="button"
            onClick={ this.handleClick }
            data-testid="query-button"
          >
            Pesquise o Produto
          </button>
          <div className="product-list-container">
            {
              (productList.length > 0)
                ? this.renderProductList() : this.checkSearchResult()
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
