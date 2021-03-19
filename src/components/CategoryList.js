import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class CategoryList extends Component {
  render() {
    const { name, category, clickCategory } = this.props;
    return (
      <div className="category" data-testid="category">
        <button type="button" id={ category } onClick={ clickCategory }>
          { name }
        </button>
      </div>
    );
  }
}

CategoryList.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  clickCategory: PropTypes.func.isRequired,
};

export default CategoryList;
