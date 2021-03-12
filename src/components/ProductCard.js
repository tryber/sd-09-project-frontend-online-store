import React from 'react';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, thumbnail, price} = this.props.product;
    return (
      <div data-testid="product">
        <span>{title}</span>
        <img src={thumbnail} alt="image" />
        <span>{price}</span>
      </div>
    );
  }
}

export default ProductCard;
