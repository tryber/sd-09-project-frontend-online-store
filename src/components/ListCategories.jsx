import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as api from '../services/api';

export default class ListCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const listCategories = await api.getCategories();
    this.estado(listCategories);
  }

  estado(listaCat) {
    this.setState({
      categories: listaCat,
    });
  }

  render() {
    const { categories } = this.state;
    const { fnc } = this.props;
    return (
      <div className="category">
        <h1>Categorias:</h1>
        {categories.map(({ id, name }) => (
          <label key={ id } htmlFor={ id }>
            <input
              data-testid="category"
              type="radio"
              name="category"
              id={ id }
              value={ id }
              onClick={ fnc }
            />
            { name }
          </label>
        ))}
      </div>
    );
  }
}

ListCategories.propTypes = {
  fnc: PropTypes.func.isRequired,
};
