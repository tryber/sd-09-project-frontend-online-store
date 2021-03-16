import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getCategories } from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    const { onClick } = this.props;

    if (categories.length < 1) {
      return <h4>Loading</h4>;
    }

    return (
      <div>
        <h1>Categorias</h1>
        {categories.map((catObj) => (
          <div key={ catObj.id }>
            <label htmlFor="category-name">
              <input
                type="radio"
                id={ catObj.id }
                name="category-name"
                data-testid="category"
                value={ catObj.id }
                onClick={ onClick }
              />
              { catObj.name }
            </label>
          </div>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default Categories;
