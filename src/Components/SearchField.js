import React, { Component } from 'react';
import ButtonCart from './ButtonCart';
import * as api from '../services/api';
import ItemCard from './ItemCard';
import ListCategorie from './ListCategorie';

class SearchField extends Component {
  constructor() {
    super();
    this.searchTermChange = this.searchTermChange.bind(this);
    this.searchResults = this.searchResults.bind(this);
    this.onClickSearch = this.onClickSearch.bind(this);
    this.addIdCategorie = this.addIdCategorie.bind(this);
    this.state = {
      searchTerm: '',
      idCategorie: '',
      matchItens: [],
      sucess: true,
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((cat) => this.setState({
      categories: cat,
    }));
  }

  async onClickSearch() {
    const { idCategorie, searchTerm } = this.state;
    let requestItens = '';
    requestItens = await api.getProductsFromCategoryAndQuery(idCategorie, searchTerm);
    this.setState({ matchItens: requestItens.results });
    if (requestItens.results.length === 0) {
      this.setState({ sucess: false });
    } else this.setState({ sucess: true });
  }

  searchTermChange({ target }) {
    this.setState({
      searchTerm: target.value,
    });
  }

  addIdCategorie(event) {
    this.setState({ idCategorie: event.target.value });
  }

  searchResults() {
    const { matchItens, sucess, searchTerm, idCategorie } = this.state;
    if (matchItens.length > 0) {
      return (matchItens.map((matchItem) => (
        <ItemCard
          key={ matchItem.id }
          product={ matchItem }
          term={ searchTerm }
          categorId={ idCategorie }
        />
      )));
    } if (!sucess) {
      return <div>Nenhum produto foi encontrado</div>;
    }
  }

  render() {
    const { searchTerm, categories } = this.state;
    return (
      <div data-testid="home-initial-message">
        <input
          data-testid="query-input"
          type="text"
          onChange={ this.searchTermChange }
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={ this.onClickSearch }
        >
          Pesquisar
        </button>
        <ButtonCart />
        <div>
          {!searchTerm
          && <div>Digite algum termo de pesquisa ou escolha uma categoria.</div>}
          <ListCategorie
            categories={ categories }
            onChange={ this.addIdCategorie }
            onClick={ this.onClickSearch }
          />
          {this.searchResults()}
        </div>
      </div>
    );
  }
}

export default SearchField;
