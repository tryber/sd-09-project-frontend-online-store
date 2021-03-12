import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <section>
        <div>
          <h6>title</h6>
          <img src={ thumbnail } alt="Product" />
          <span>price</span>
        </div>
      </section>
    );
  }
}

export default ProductCard;