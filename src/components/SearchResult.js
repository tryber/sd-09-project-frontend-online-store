import React from 'react';
import PropTypes from 'prop-types';
import ShowDetails from './ShowDetailsButton';
import AddToCart from './AddToCart';

class SearchResult extends React.Component {
  constructor() {
    super();
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart() {
  }

  renderCard() {
    const { productsList } = this.props;
    return (
      <ul className="product-card" key={ productsList.id }>
        {
          productsList.map(({
            id,
            title,
            thumbnail,
            price,
            attributes,
            condition,
            address,
            shipping,
            available_quantity: quantity,
          }) => (
            <li key={ id } data-testid="product" className="product-by-query">
              <h3 className="product-title">{ title }</h3>
              <img src={ thumbnail } alt={ title } />
              <p className="product-price">{ price }</p>
              <ShowDetails
                id={ id }
                title={ title }
                thumbnail={ thumbnail }
                price={ price }
                attributes={ attributes }
                address={ address }
                condition={ condition }
                shipping={ shipping }
              />
              { shipping.free_shipping ? (
                <p data-testid="free-shipping">Frete grátis</p>
              ) : (
                <p> </p>
              )}
              <AddToCart
                onClickCallback={ this.handleAddToCart }
                productInfos={ {
                  id,
                  title,
                  amount: 1,
                  testId: 'product-add-to-cart',
                  quantity } }
              />
            </li>
          ))
        }
      </ul>
    );
  }

  renderInitialMessage() {
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </h1>
      </div>
    );
  }

  render() {
    const { productsList } = this.props;
    return (
      productsList.length < 1
        ? this.renderInitialMessage()
        : this.renderCard(productsList)
    );
  }
}

SearchResult.propTypes = {
  productsList: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};

export default SearchResult;
