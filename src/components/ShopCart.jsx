import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shopCart from '../images/shopCart.png';
import previous from '../images/previous.png';
import box from '../images/box.png';
import RenderToCart from './RenderToCart';

class ShopCart extends Component {
  render() {
    return (
      <>
        <Link to="/">
          <img src={ previous } alt="Imagem de uma seta" className="previous-shop" />
        </Link>

        <div className="content-cart">
          <img
            src={ shopCart }
            alt="Imagem do carrinho de compras"
            className="shop-cart-shop"
          />
          <p className="cart-description">Carrinho de Compras</p>
        </div>

        <div className="content-empty">
          <img
            src={ box }
            alt="Imagem de uma caixa"
            className="box-shop"
          />

          <p className="empty-message" data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>
        <RenderToCart />
      </>
    );
  }
}

export default ShopCart;
