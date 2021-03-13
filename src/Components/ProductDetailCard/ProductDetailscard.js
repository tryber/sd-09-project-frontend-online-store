import React, { Component } from 'react';
import { shape, func } from 'prop-types';
import ButtonsCardDetails from '../ButtonsCardDetails/ButtonsCardDetails';
import PictureCardDetail from '../PictureCardDetail/PictureCardDetail';
import './ProductDetails.css';

class ProductDeatailsCard extends Component {
  render() {
    const { product, onClick } = this.props;
    const { title, price, pictures } = product;
    return (
      <div data-testid="product-detail-name" className="productContainer">
        <PictureCardDetail pictures={ pictures } title={ title } />
        <div className="titleDetails">
          { title }
          { price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
          <ButtonsCardDetails product={ product } />
          <button
            className="detailsToAddCart"
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ onClick }
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductDeatailsCard.propTypes = {
  product: shape().isRequired,
  onClick: func.isRequired,
};

export default ProductDeatailsCard;
