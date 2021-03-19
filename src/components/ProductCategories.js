import React from 'react';
import PropTypes from 'prop-types';
import * as ApiMercadoLivre from '../services/api';

class ProductCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [{ name: 'Carregando categorias', id: 'Carregando categorias' }],
    };
  }

  componentDidMount() {
    const ApiResponse = ApiMercadoLivre.getCategories();
    ApiResponse.then((response) => {
      this.setState({
        categories: response,
      });
    });
  }

  categoryItemList(category) {
    //  https://stackoverflow.com/questions/1229856/what-is-the-best-way-to-style-a-list-of-checkboxes
    //  https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input/checkbox

    const { updateCategoryValue } = this.props;
    return (
      <li key={ category.id }>
        <input
          type="radio"
          name="categoryValue"
          id={ category.id }
          value={ category.id }
          onChange={ updateCategoryValue }
        />
        <label htmlFor={ category.id } data-testid="category">{category.name}</label>
      </li>
    );
  }

  render() {
    const { categories } = this.state;
    return (
      <aside className="aside-categories">
        <h3>Categorias</h3>
        <ul>
          {categories.map((category) => this.categoryItemList(category))}
        </ul>
      </aside>
    );
  }
}

ProductCategories.propTypes = {
  updateCategoryValue: PropTypes.func.isRequired,
};

export default ProductCategories;
