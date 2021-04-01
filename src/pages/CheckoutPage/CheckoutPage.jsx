import React, { Component } from 'react';
import InputContext from '../../components/InputContext';
import CartProduct from '../../components/CartProduct';
import CheckoutForm from '../../components/CheckoutForm';
import BuyButton from '../../components/BuyButton';

class CheckoutPage extends Component {
  removeDuplicates(array) {
    return array.filter(({ id: id1 }, index) => (
      index === array.findIndex(({ id: id2 }) => (
        id1 === id2
      ))
    ));
  }

  render() {
    return (
      <div>
        <InputContext.Consumer>
          {
            ({ cartProducts }) => {
              const totalPrice = cartProducts.reduce((acc, { price }) => acc + price, 0);
              const products = this.removeDuplicates(cartProducts);
              return !cartProducts.length
                ? (
                  <div data-testid="shopping-cart-empty-message">
                    Sem produtos para revisar
                  </div>
                )
                : (
                  <div>
                    <h3>Revise seus produtos</h3>
                    {products.map((product) => {
                      const { id: prodId } = product;
                      const quantity = cartProducts.reduce((acc, { id }) => (
                        id === prodId ? acc + 1 : acc
                      ), 0);
                      return (<CartProduct
                        key={ product.id }
                        info={ { ...product, quantity } }
                      />);
                    })}
                    <p>
                      Total: R$
                      {totalPrice}
                    </p>
                    <CheckoutForm />
                    <BuyButton />
                  </div>
                );
            }
          }
        </InputContext.Consumer>
      </div>
    );
  }
}

export default CheckoutPage;
