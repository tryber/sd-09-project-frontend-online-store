import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import ProductCard from '../Components/ProductCard/ProductCard';
import Categories from '../Components/Categories/Categories';
import Loading from '../Components/Loading/Loading';
import Cart from '../services/Data';
import * as api from '../services/api';

export default class Home extends Component {
  constructor(state) {
    super(state);

    this.setSearchText = this.setSearchText.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.sumCartQuant = this.sumCartQuant.bind(this);

    this.state = {
      searchText: '',
      productList: [],
      loading: false,
      totalQuant: 0,
    };
  }

  async handleCategory({ target }) {
    this.setState({ loading: true });
    const { searchText } = this.state;
    await api.getProductsFromCategoryAndQuery(target.value, searchText)
      .then((response) => {
        const list = response.results;
        this.setState({ productList: list });
      });
    this.setState({ loading: false });
  }

  setSearchText({ target }) {
    this.setState({ searchText: target.value });
  }

  sumCartQuant() {
    this.setState({ totalQuant: 0 });
    Cart.forEach(({ quantity }) => {
      this.setState((prevState) => ({
        totalQuant: prevState.totalQuant + quantity,
      }));
    });
    const { totalQuant } = this.state;
    localStorage.setItem('quant', totalQuant);
  }

  render() {
    const { productList, loading, searchText, totalQuant } = this.state;
    return (
      <div className="App">
        <Header
          totalQuant={ totalQuant }
          setSearchText={ this.setSearchText }
          handleCategory={ this.handleCategory }
        />
        <div className="left-side">
          <Categories handleCategory={ this.handleCategory } />
        </div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ul>
          { (loading) ? <Loading /> : null }
          {productList
            .map((product) => (
              <ProductCard
                key={ product.id }
                product={ product }
                text={ searchText }
                sumCartQuant={ this.sumCartQuant }
              />
            ))}
        </ul>
      </div>
    );
  }
}
