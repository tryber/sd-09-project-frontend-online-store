import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import CardList from '../Components/CardList';
import ListCategories from '../Components/ListCategories';
import botaoCarrinho from '../Images/botaoCarrinho.jpg';
import './Pages.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.getCatAndQuery = this.getCatAndQuery.bind(this);
    this.searchTextChange = this.searchTextChange.bind(this);
    this.renderCard = this.renderCard.bind(this);
    this.getCategoriesApi = this.getCategoriesApi.bind(this);
    this.changeCategory = this.changeCategory.bind(this);

    this.state = {
      categories: [],
      products: [],
      searchText: '',
      category: '',
      cardList: false,
      digite: true,
    };
  }

  componentDidMount() {
    this.getCategoriesApi();
  }

  getCategoriesApi() {
    api.getCategories()
      .then((categories) => {
        this.setState({
          categories,
        });
      });
  }

  getCatAndQuery(category, value) {
    api.getProductsFromCategoryAndQuery(category, value)
      .then(({ results }) => {
        this.setState({
          products: results,
          cardList: true,
        });
      });
  }

  searchTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }

  changeCategory(value) {
    this.setState({ category: value }, () => this.renderCard());
  }

  renderCard() {
    const { searchText, category } = this.state;
    this.getCatAndQuery(category, searchText);
    this.setState({
      digite: false,
    });
  }

  render() {
    const { searchText, products, cardList, digite, categories } = this.state;
    const { totalCart, totalCartNumber } = this.props;

    return (
      <div className="main" data-testid="home-initial-message">
        <section className="section-category">
          Categorias:
          { categories.map((category) => (
            <ListCategories
              key={ category.id }
              category={ category }
              radio={ this.changeCategory }
            />))}
        </section>
        <section>
          <div>
            <label htmlFor="searchtext">
              <input
                type="text"
                id="searchText"
                name="searchText"
                value={ searchText }
                onChange={ this.searchTextChange }
                data-testid="query-input"
              />
            </label>
            <input
              type="button"
              data-testid="query-button"
              value="Buscar"
              onClick={ this.renderCard }
            />
            {totalCartNumber()}
            <Link data-testid="shopping-cart-button" to="/carrinho">
              <img src={ botaoCarrinho } alt="botãoCarrinhoVazio" />
            </Link>
          </div>
          { digite && <p>Digite algum termo de pesquisa ou escolha uma categoria.</p> }
          { cardList && <CardList
            products={ products }
            totalCart={ totalCart }
          /> }
        </section>
      </div>
    );
  }
}

Search.propTypes = {
  totalCart: PropTypes.func.isRequired,
  totalCartNumber: PropTypes.func.isRequired,
};

export default Search;
