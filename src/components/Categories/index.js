import React, { Component } from 'react';
import * as api from '../../services/api';
import './styles.css';

export default class Categories extends Component {
  constructor(state) {
    super(state);
    this.state = {
      categories: [],
      loading: true,
    };
  }

  async componentDidMount() {
    await api.getCategories().then((data) => {
      this.setState({ categories: data, loading: false });
    });
  }

  render() {
    const { categories, loading } = this.state;

    if (loading) return (<div>Carregando...</div>);

    return (
      <div className="wrapper-category">
        {categories.map((category) => (
          <div key={ category.id }>
            <label data-testid="category" htmlFor="category">
              <input
                type="checkbox"
                id="category"
                name={ category.id }
                value={ category.id }
              />
              {category.name}
            </label>
          </div>
        ))}

      </div>
    );
  }
}
