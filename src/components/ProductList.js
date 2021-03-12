import React from 'react';
import * as api from '../services/api';
import ProductCard from './ProductCard';


class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    }

    this.getProducts = this.getProducts.bind(this);
  }

  async getProducts(categoryId, query) {
    const data = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      products: data.results,
    });
  }

  componentDidMount() {
    return this.getProducts();
  }

  render() {
    const {products} = this.state;
    return (
      <div>
       {products.map(data => <ProductCard key={data.id} product={data} />)}
      </div>
    );
  }
}

export default ProductList;
