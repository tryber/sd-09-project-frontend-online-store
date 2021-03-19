import { Component } from 'react';
import CartStorage from '../services/cart';

export default class AbstractCartHandler extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: CartStorage.items,
    };

    this.addToCart = this.addToCart.bind(this);
    this.getIndexOf = this.getIndexOf.bind(this);
    this.getTotalAmount = this.getTotalAmount.bind(this);
    this.getTotalQuantity = this.getTotalQuantity.bind(this);
    this.changeItemQuantity = this.changeItemQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateStorage = this.updateStorage.bind(this);
    this.cartHandler = {
      add: this.addToCart,
      changeQuantityOf: this.changeItemQuantity,
      remove: this.removeItem,
      items: this.getItems,
      total: this.getTotalAmount,
      size: this.getTotalQuantity,
    };
  }

  getIndexOf({ id: itemId }) {
    const { cartItems } = this.state;
    return cartItems.findIndex(({ id }) => (id === itemId));
  }

  get getItems() {
    const { cartItems } = this.state;
    return cartItems;
  }

  getTotalAmount() {
    const { cartItems } = this.state;
    const total = cartItems.reduce(
      (amount, { price, quantity }) => (amount + price * quantity),
      0,
    );
    return parseFloat(total.toFixed(2));
  }

  getTotalQuantity() {
    const { cartItems } = this.state;
    const totalQ = cartItems.reduce(
      (total, { quantity }) => (total + quantity),
      0,
    );
    return totalQ;
  }

  updateStorage() {
    const { cartItems } = this.state;
    CartStorage.items = cartItems;
    CartStorage.save();
  }

  addToCart(item) {
    const existingIndex = this.getIndexOf(item);
    const { cartItems } = this.state;
    if (existingIndex >= 0) {
      this.changeItemQuantity({ index: existingIndex }, '+');
    } else {
      item.quantity = 1;
      cartItems.push(item);
      this.setState({ cartItems }, () => this.updateStorage());
    }
  }

  changeItemQuantity({ index: itemIndex }, operation) {
    const { cartItems: items } = this.state;
    let { quantity } = items[itemIndex];
    const { availableQuantity } = items[itemIndex];
    quantity = operation === '+' ? quantity += 1 : quantity -= 1;
    quantity = quantity < 0 ? 0 : quantity;
    quantity = quantity > availableQuantity ? availableQuantity : quantity;
    this.setState(({ cartItems }) => {
      cartItems[itemIndex].quantity = quantity;
      return { cartItems };
    }, () => this.updateStorage());
  }

  removeItem({ index: itemIndex }) {
    const { cartItems } = this.state;
    cartItems.splice(itemIndex, 1);
    this.setState({ cartItems }, () => this.updateStorage());
  }
}
