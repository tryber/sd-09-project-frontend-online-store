import React from 'react';
import CategoryList from '../../components/CategoryList';
import ProductsPage from '../ProductsPage';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <CategoryList />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ProductsPage />
      </>
    );
  }
}

export default HomePage;
