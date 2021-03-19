import React from 'react';
import PropTypes from 'prop-types';
import * as api from './api';

class AllCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      allCategories: [],
    };
  }

  componentDidMount() {
    this.fetchCategory();
  }

  async fetchCategory() {
    const gCategories = await api.getCategories();
    this.setState({
      allCategories: gCategories,
    });
  }

  render() {
    const { allCategories } = this.state;
    const { onClick } = this.props;
    return (
      <section className="categories">
        { allCategories.map(({ name, id }) => (
          <label
            htmlFor={ id }
            key={ id }
          >
            { name }
            <input
              data-testid="category"
              type="radio"
              key={ id }
              id={ id }
              name="radio"
              onClick={ onClick }
            />
          </label>
        ))}
      </section>
    );
  }
}

AllCategories.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AllCategories;
