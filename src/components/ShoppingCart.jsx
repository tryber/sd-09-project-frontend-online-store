import React from 'react';
import { Link } from 'react-router-dom';
import RenderCarts from './RenderCart';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
    this.clickPlus = this.clickPlus.bind(this);
    this.componentUpdate = this.componentUpdate.bind(this);
    this.usingState = this.usingState.bind(this);
  }

  componentDidUpdate() {
    this.componentUpdate();
  }

  clickDecrease(id) {
    const productJ = JSON.parse(localStorage.carrinho);
    const findProduct = productJ.find((data) => data.id === id);
    const position = productJ.indexOf(findProduct);
    if (productJ[position].count > 1) {
      productJ[position].count -= 1;
      this.setState({
        quantity: productJ[position].count,
      });
      const jsonString = JSON.stringify(productJ);
      localStorage.setItem('carrinho', jsonString);
    }
    this.usingState();
  }

  clickPlus(id) {
    const productJ = JSON.parse(localStorage.carrinho);
    const findProduct = productJ.find((data) => data.id === id);
    const position = productJ.indexOf(findProduct);
    productJ[position].count += 1;
    this.setState({
      quantity: productJ[position].count,
    });
    const jsonString = JSON.stringify(productJ);
    localStorage.setItem('carrinho', jsonString);
    this.usingState();
  }

  usingState() {
    const { quantity } = this.state;
    const quantityVar = quantity;
    console.log(quantityVar);
  }

  componentUpdate() {
    return (
      JSON.parse(localStorage.carrinho).map(({ title, count, id }) => (
        <div key={ id }>
          <RenderCarts title={ title } count={ count } id={ id } />
        </div>
      ))
    );
  }

  render() {
    if (localStorage.carrinho === undefined) {
      return (
        <div>
          <h4 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h4>
          <button type="button">
            <Link to="/">
              Voltar
            </Link>
          </button>
        </div>
      );
    }
    return (
      <div>
        <div>
          { JSON.parse(localStorage.carrinho).map(({ title, count, id }) => (
            <div key={ id }>
              <RenderCarts
                title={ title }
                count={ count }
                id={ id }
                clickPlus={ () => this.clickPlus(id) }
                clickDecrease={ () => this.clickDecrease(id) }
              />
            </div>
          ))}
          <button type="button">
            <Link to="/">
              Voltar
            </Link>
          </button>
          <button type="button">
            <Link to="/Checkout" data-testid="checkout-products">
              Chekout
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
