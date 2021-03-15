import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListOfCategories from './ListOfCategories';
import { getCategories } from '../services/api';
import ListProducts from './ListProducts';

class InitialPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      butttonClicked: false,
      query: '',
      categories: [],
      categoryId: '',
    };

    this.getApiCategories = this.getApiCategories.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickCategory = this.handleClickCategory.bind(this);
  }

  componentDidMount() {
    this.getApiCategories();
  }

  handleClickCategory(id) {
    this.setState({
      categoryId: id,
    }, () => this.buttonClick());
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      query: value,
    });
  }

  async getApiCategories() {
    this.setState(
      async () => {
        const getApiCategories = await getCategories();
        this.setState({
          categories: getApiCategories,
        });
      },
    );
  }

  buttonClick() {
    const { butttonClicked } = this.state;
    this.setState({
      butttonClicked: !butttonClicked,
    });
  }

  render() {
    const { categories, butttonClicked, query, categoryId } = this.state;
    const { addProductToCart } = this.props;
    return (
      <div className="list-products">
        <input
          data-testid="query-input"
          type="text"
          name="queryText"
          value={ query }
          onChange={ this.handleChange }
        />

        <button
          data-testid="query-button"
          type="button"
          onClick={ this.buttonClick }
        >
          Pesquisar
        </button>
        { butttonClicked ? <ListProducts
          categoryId={ categoryId }
          query={ query }
          addProductToCart={ addProductToCart }
        />
          : (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )}
        <div>
          Categorias:
          {categories.map((category, index) => (
            <ListOfCategories
              key={ index }
              category={ category }
              handleClick={ this.handleClickCategory }
            />
          ))}
        </div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <button type="button">Carrinho de compras</button>
        </Link>
      </div>
    );
  }
}

InitialPage.propTypes = {
  addProductToCart: PropTypes.func.isRequired,
};

export default InitialPage;
