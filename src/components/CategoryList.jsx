import React from 'react';
import PropTypes from 'prop-types';
import CategoryCard from './CategoryCard';
import * as api from '../services/api';
import '../styles/components/CategoryList.css';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.getCategories = this.getCategories.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    try {
      this.setState({
        categories: await api.getCategories(),
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { getCategoryId } = this.props;
    const { categories } = this.state;
    return (
      <div className="category-list">
        { categories.map((category) => (<CategoryCard
          key={ category.id }
          category={ category }
          getCategoryId={ getCategoryId }
        />))}
      </div>
    );
  }
}

CategoryList.propTypes = {
  getCategoryId: PropTypes.func.isRequired,
};

export default CategoryList;
