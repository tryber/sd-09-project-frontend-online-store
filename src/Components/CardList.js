import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Card.css';

class CardList extends React.Component {
  render() {
    const { products, totalCart } = this.props;

    if (!products || products.length === 0) {
      return <p>Nenhum produto foi encontrado</p>;
    }

    return (
      <div className="container-card">
        {products.map((product, index) => (
          <Card
            key={ index }
            product={ product }
            totalCart={ totalCart }
          />))}
      </div>
    );
  }
}

CardList.propTypes = {
  products: PropTypes.objectOf().isRequired,
  totalCart: PropTypes.func.isRequired,
};

export default CardList;
