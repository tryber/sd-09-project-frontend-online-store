import React, { Component } from 'react';
import * as Api from '../services/api';

class ProductList extends Component {
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
    const categoriesResponse = await Api.getCategories();

    this.setState({ categories: categoriesResponse });
  }

  render() {
    const { categories } = this.state;

    return (
      <main>
        <nav>
          <input type="text" />
        </nav>
        <aside>
          <span>Categorias:</span>
          {categories.map((category) => (
            <div key={ category.id }>
              <label
                data-testid="category"
                htmlFor={ `${category.name}-checkbox` }
              >
                <input id={ `${category.name}-checkbox` } type="checkbox" />
                { category.name }
              </label>
            </div>
          ))}
        </aside>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </main>
    );
  }
}

export default ProductList;
