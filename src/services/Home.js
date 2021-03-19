import React from 'react';
import SearchBar from './SearchBar';
import MainPage from './MainPage';
import ProductsList from './ProductsList';
import AllCategories from './AllCategories';
import ShoppingCartBtn from './ShoppingCartBtn';
import * as api from './api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: '',
      productsArrive: false,
      category: '',
      query: '',
    };

    this.getProducts = this.getProducts.bind(this);
    this.filterCategory = this.filterCategory.bind(this);
    this.addToCartBtn = this.addToCartBtn.bind(this);
  }

  getProducts(productsFromApi, inputValue) {
    this.setState({
      products: productsFromApi,
      productsArrive: true,
      query: inputValue,
    });
  }

  addToCartBtn(product) {
    const { shoppingCartList } = this.state;
    const shoppingCartArray = shoppingCartList;
    const productCartInfos = {
      id: product.id,
      name: product.title,
      price: product.price,
      thumb: product.thumbnail,
      quantity: 1,
    };
    if (shoppingCartArray.length === 0) {
      shoppingCartArray.push(productCartInfos);
      this.setState({ shoppingCartList: shoppingCartArray });
      return;
    }
    const cartItemsCheck = shoppingCartArray.findIndex((item) => product.id === item.id);
    if (cartItemsCheck >= 0) {
      shoppingCartArray[cartItemsCheck].quantity += 1;
      this.setState({ shoppingCartList: shoppingCartArray });
    } else {
      shoppingCartArray.push(productCartInfos);
      this.setState({ shoppingCartList: shoppingCartArray });
    }
  }

  async filterCategory({ target: { id } }) {
    const { query } = this.state;
    const productsFromCategory = await api.getProductsFromCategoryAndQuery(id, query);
    this.setState({
      products: productsFromCategory,
      category: id,
      productsArrive: true,
    });
  }

  render() {
    const { products, productsArrive, category } = this.state;
    localStorage.setItem('shoppingCartList', JSON.stringify([]));
    return (
      <>
        <SearchBar category={ category } sentProducts={ this.getProducts } />
        <ShoppingCartBtn />
        <AllCategories onClick={ this.filterCategory } />
        { productsArrive
          ? <ProductsList addToCartBtn={ this.addToCartBtn } productsList={ products } />
          : <MainPage /> }
      </>
    );
  }
}

export default Home;
