import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      categories: [],
    };
  }

  async componentDidMount() {
    return getCategories().then((cat) => this.setState({
      categories: cat,
      status: '',
    }));
  }

  render() {
    const { filterId } = this.props;
    const { categories, status } = this.state;
    if (status === 'loading') return <div>Loading ...</div>;
    return (
      <div>
        Categorias:
        { categories.map(({ id, name }) => (
          <div key={ id }>
            <label htmlFor={ name }>
              <input
                data-testid="category"
                type="radio"
                name="filters"
                onClick={ () => filterId(id) }
              />
              { name }
            </label>
          </div>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  filterId: PropTypes.func,
}.isRequired;

export default Categories;
