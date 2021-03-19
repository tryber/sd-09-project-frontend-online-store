import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import CheckOut from './CheckOut';
import ProductDetail from './ProductDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsCart: 0,
      purchaseItems: [],
    };
    this.handleProduct = this.handleProduct.bind(this);
    this.getLocalStorageData = this.getLocalStorageData.bind(this);
    this.createCustomProduct = this.createCustomProduct.bind(this);
  }

  componentDidMount() {
    this.getLocalStorageData();
  }

  componentDidUpdate() {
    const { itemsCart, purchaseItems } = this.state;
    localStorage.setItem('itemsCart', itemsCart);
    localStorage.setItem('purchaseItems', JSON.stringify(purchaseItems));
  }

  handleProduct(item, origin) {
    const { purchaseItems } = this.state;
    let { itemsCart } = this.state;
    let customProduct = purchaseItems.find(
      (PurchaseItem) => (item.id === PurchaseItem.id),
    );

    if (!customProduct) {
      customProduct = this.createCustomProduct(item);
      purchaseItems.push(customProduct);
    }
    itemsCart += parseInt(customProduct.increaseTotal, 10);
    if (origin === 'products') {
      customProduct.purchaseQuantity += 1;
    }
    const customProductIndex = purchaseItems.indexOf(customProduct);
    if (customProduct.purchaseQuantity <= 0) {
      purchaseItems.splice(customProductIndex, 1);
    } else {
      purchaseItems[customProductIndex] = customProduct;
    }
    this.setState({
      itemsCart,
      purchaseItems,
    });
  }

  getLocalStorageData() {
    const itemsCartStorage = parseInt(localStorage.getItem('itemsCart'), 10);
    const purchaseItemsStorage = JSON.parse(localStorage.getItem('purchaseItems' || []));
    if (itemsCartStorage !== null && purchaseItemsStorage !== null) {
      this.setState({
        itemsCart: itemsCartStorage,
        purchaseItems: purchaseItemsStorage,
      });
    }
  }

  createCustomProduct(product) {
    const customProductObject = {
      id: product.id,
      title: product.title,
      price: product.price,
      available: product.available_quantity,
      purchaseQuantity: 0,
      increaseTotal: 1,
    };
    return customProductObject;
  }

  render() {
    const { itemsCart, purchaseItems } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={
                () => (<Home
                  handleProduct={ this.handleProduct }
                  totalProducts={ itemsCart }
                  purchaseItems={ purchaseItems }
                />)
              }
            />
            <Route
              path="/product-detail/:id"
              render={ (props) => (<ProductDetail
                handleProduct={ this.handleProduct }
                totalProducts={ itemsCart }
                location={ props.location }
              />) }
            />
            <Route
              path="/shopping-cart"
              render={ () => (
                <Cart
                  purchaseItems={ purchaseItems }
                  handleProduct={ this.handleProduct }
                />) }
            />
            <Route
              path="/checkout"
              render={ () => <CheckOut itemsCart={ purchaseItems } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
