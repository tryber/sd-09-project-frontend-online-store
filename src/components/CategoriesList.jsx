import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class CategoriesList extends Component {
  constructor() {
    super();

    this.state = {
      categoryName: [],
    };
  }

  componentDidMount() {
    api.getCategories().then(
      (response) => this.setState({ categoryName: response }),
    );
  }

  render() {
    const { activateButton } = this.props;
    const { categoryName } = this.state;
    return (
      <aside>
        {categoryName.map((currentValue) => (
          <button
            key={ currentValue.id }
            type="button"
            data-testid="category"
            onClick={ activateButton }
            className={ currentValue.id }
          >
            {currentValue.name}
          </button>)) }
      </aside>
    );
  }
}

CategoriesList.propTypes = {
  activateButton: PropTypes.func,
}.isRequired;

export default CategoriesList;
