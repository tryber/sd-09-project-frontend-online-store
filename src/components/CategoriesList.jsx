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
          <div className="category-box" key={ currentValue.id }>
            <input
              key={ currentValue.id }
              type="radio"
              data-testid="category"
              onClick={ activateButton }
              className="input-radio"
              name={ currentValue }
              id={ currentValue }
            />
            <label
              htmlFor={ currentValue.id }
            >
              {currentValue.name}
            </label>
          </div>
        )) }
      </aside>
    );
  }
}

CategoriesList.propTypes = {
  activateButton: PropTypes.func,
}.isRequired;

export default CategoriesList;
