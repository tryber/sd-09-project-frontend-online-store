import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import CategoriesCheckBox from './categoriesCheckBox';

class CategoriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productsCategories: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((categoriesValue) => this.setState({ productsCategories: categoriesValue }));
  }

  render() {
    const { productsCategories } = this.state;
    const { handleCat } = this.props;

    return (
      <div>
        <ul>
          {productsCategories.map((category) => (
            <CategoriesCheckBox
              key={ category.name }
              category={ category }
              change={ handleCat }
            />
          ))}
        </ul>
      </div>
    );
  }
}

CategoriesList.propTypes = {
  handleCat: PropTypes.func,
}.isRequired;

export default CategoriesList;
