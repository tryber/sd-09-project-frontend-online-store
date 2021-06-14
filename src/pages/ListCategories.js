import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ListCategories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then((response) => this
        .setState({ categories: response }));
  }

  handleClick(event) {
    const { onChange } = this.props;
    onChange(event.target.value);
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="listCategories">
        <p>Categorias:</p>
        <div onChange={ this.handleClick }>
          {categories.map((category) => (
            <label htmlFor={ category.id } key={ category.id }>
              <input
                type="radio"
                value={ category.id }
                key={ category.id }
                name="category"
                id={ category.id }
                data-testid="category"
              />
              { category.name }
              <br />
            </label>
          ))}
        </div>
      </div>
    );
  }
}

ListCategories.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ListCategories;
