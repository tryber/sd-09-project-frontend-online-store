import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Category from './Category';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allCategories: '', loading: true };
    this.fetchAllCategories = this.fetchAllCategories.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchAllCategories();
  }

  handleChange(event) {
    const { getCategory } = this.props;
    getCategory(event.target.id);
  }

  async fetchAllCategories() {
    const allCategoriesData = await api.getCategories();
    this.setState({
      allCategories: allCategoriesData,
      loading: false,
    });
  }

  render() {
    const { allCategories, loading } = this.state;
    if (loading) {
      return <p>Loading paragrafo</p>;
    }

    const categories = allCategories
      .map((categoryMap) => (
        <label key={ categoryMap.id } htmlFor={ categoryMap.id }>
          <input
            data-testid="category"
            type="radio"
            id={ categoryMap.id }
            name="category"
            value={ categoryMap.name }
          />
          <li>{ categoryMap.name }</li>
        </label>
      ));
    return <ul onChange={ this.handleChange }>{ categories }</ul>;
  }
}

Categories.propTypes = { getCategory: PropTypes.func }.isRequired;

export default Categories;
