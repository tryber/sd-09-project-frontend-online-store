import React from 'react';
import * as api from '../services/api';
import ListCategories from './ListCategories';
import RenderElements from './RenderElements';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promisse: false,
      categories: '',
      query: '',
      products: [],
    };
    this.getCategories = this.getCategories.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickCategories = this.handleClickCategories.bind(this);
    this.handleInputCategories = this.handleInputCategories.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  async handleClick() {
    const { query } = this.state;
    const selectedProducts = await this.getProducts({ query });
    this.setState({
      products: selectedProducts.results,
    });
  }

  async handleClickCategories(categoryId) {
    const { query } = this.state;
    const selectedCategories = await this.getProducts({ categoryId, query });
    this.setState({
      products: selectedCategories.results,
    });
  }

  handleInputChange({ target }) {
    this.setState({
      query: target.value,
    });
  }

  handleInputCategories({ target }) {
    this.handleClickCategories(target.value);
  }

  async getCategories() {
    const categories = await api.getCategories().then((data) => this.setState({
      categories: data,
      promisse: true,
    }));
    return categories;
  }

  async getProducts({ categoryId, query }) {
    const products = await api.getProductsFromCategoryAndQuery(categoryId, query);
    return products;
  }

  render() {
    const { promisse, categories, products } = this.state;
    if (promisse === true) {
      return (
        <div>
          <RenderElements
            products={ products }
            handleClick={ this.handleClick }
            handleInputChange={ this.handleInputChange }
          />
          <div>
            <ListCategories
              categories={ categories }
              handleInputCategories={ this.handleInputCategories }
            />
          </div>
        </div>
      );
    }
    return (
      <RenderElements
        products={ products }
        handleClick={ this.handleClick }
        handleInputChange={ this.handleInputChange }
      />
    );
  }
}

export default Home;
