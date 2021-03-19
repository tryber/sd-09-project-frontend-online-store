import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import ProductCategories from '../components/ProductCategories';
import { getProductsFromCategoryAndQuery } from '../services/api';

//  Comentario para criar o PR

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      searchValue: '',
      categoryValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleProducts(products) {
    this.setState({ products });
  }

  async changeCategory(event) {
    this.handleChange(event);
    const { searchValue } = this.state;
    const response = await getProductsFromCategoryAndQuery(
      event.target.value, searchValue,
    );
    const products = response.results;
    this.handleProducts(products);
  }

  render() {
    const { products, searchValue, categoryValue } = this.state;
    const showInput = true;
    const showSearchButton = true;
    return (
      <div>
        <Header
          showInput={ showInput }
          showSearchButton={ showSearchButton }
          onChangeProducts={ (newProducts) => this.handleProducts(newProducts) }
          upDateSearchValue={ this.handleChange }
          searchValue={ searchValue }
          categoryValue={ categoryValue }
        />
        <Main products={ products } />
        <ProductCategories updateCategoryValue={ this.changeCategory } />
      </div>
    );
  }
}

export default Home;
