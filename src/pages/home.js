import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import * as apis from '../services/api';
import '../styles/pages/Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: '',
      value: '',
    };

    this.apiRequest = this.apiRequest.bind(this);
    this.searchProduct = this.searchProduct(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async searchProduct() {
    const { value } = this.state;
    console.log(value);
    const data = await apis.getProductsFromCategoryAndQuery('', value);
    this.setState({
      products: data.results,
    });
  }

  handleChange({target}) {
    this.setState({
      value: target.value,
    });
  }

  componentDidMount() {
    this.apiRequest();
  }

  async apiRequest() {
    const { getCategories } = apis;
    const result = await getCategories();
    this.setState({
      categories: [...result],
    });
  }

  render() {
    const { categories, value } = this.state;
    return (
      <div>
        <header className="home-header-container">
          <div className="search-bar-container">
            <input data-testid="query-input" className="App" type="text" value={value} onChange={this.handleChange} />
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <button type="button" data-testid="query-button" onClick={this.searchProduct}>
              Busca
            </button>
          </div>
          <Link data-testid="shopping-cart-button" to="/shopping-cart">
            <button type="button" alt="cart-button" />
          </Link>
        </header>
        <aside className="categories-content">
          <ul className="list-categories">
            {categories.map((categoria) => (
              <li data-testid="category" key={ categories.id }>
                { categoria.name }
              </li>))}
          </ul>
        </aside>
        <div>
          <ProductList />
        </div>
      </div>
    );
  }
}

export default Home;
