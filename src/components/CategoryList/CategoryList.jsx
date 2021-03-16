import React from 'react';
import * as api from '../../services/api';
import InputContext from '../InputContext';

class CategoryList extends React.Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.state = {
      category: [],
    };
  }

  async componentDidMount() {
    const category = await api.getCategories();
    this.updateState(category);
  }

  updateState(category) {
    this.setState({ category });
  }

  render() {
    const { category } = this.state;
    return (
      <InputContext.Consumer>
        {
          ({ setSelectedCategory }) => category.map(({ id, name }) => (
            <li
              key={ id }
              style={ { listStyle: 'none' } }
            >
              <input
                data-testid="category"
                type="radio"
                id={ id }
                name="categoryInputName"
                onClick={ () => setSelectedCategory(id) }
              />
              <label htmlFor={ id }>{ name }</label>
            </li>
          ))
        }
      </InputContext.Consumer>
    );
  }
}

export default CategoryList;
