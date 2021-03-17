import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as marketAPI from '../services/api';
import './AsideCategoriesList.css';

class AsideCategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };

    this.loadCategories = this.loadCategories.bind(this);
  }

  componentDidMount() {
    this.loadCategories();
  }

  loadCategories() {
    marketAPI.getCategories().then((categories) => this.setState({ categories }));
  }

  render() {
    const { categories } = this.state;
    const { changeCategory } = this.props;
    const categoriesList = categories
      .map(({ name, id }, index) => (
        <button
          type="button"
          key={ index }
          data-testid="category"
          value={ id }
          onClick={ changeCategory }
        >
          {/* quando clica passa o id pra changeCat */}
          { name }
        </button>
      ));
    return (
      <div className="d-flex">
        <aside className="aside categories-list">
          Categorias:
          {categoriesList}
        </aside>
      </div>
    );
  }
}

AsideCategoriesList.propTypes = {
  changeCategory: PropTypes.func.isRequired,
};
export default AsideCategoriesList;
