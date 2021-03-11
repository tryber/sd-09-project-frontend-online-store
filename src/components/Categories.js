import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
    this.state = {
      promisse: false,
      categories: '',
    };
  }

  componentDidMount() {
    this.renderList();
  }

  async renderList() {
    const result = await getCategories().then((categories) => this.setState({
      categories,
      promisse: true,
    }));
    return result;
  }

  render() {
    const { promisse, categories } = this.state;
    if (promisse === true) {
      return (
        <ol>
          { categories
            .map((category) => (
              <li key={ category.id } data-testid="category">{ category.name }</li>)) }
        </ol>
      );
    }
    return <ol />;
  }
}
export default Categories;
