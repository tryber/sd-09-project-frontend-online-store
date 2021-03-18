import React, { Component } from 'react';
import SendToShoppingFinish from './SendToShoppingFinish';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.fetchIds = this.fetchIds.bind(this);
    this.startFetchIds = this.startFetchIds.bind(this);
    this.configState = this.configState.bind(this);
    this.plusQuantity = this.plusQuantity.bind(this);
    this.minusQuantity = this.minusQuantity.bind(this);
    this.deleteAll = this.deleteAll.bind(this);

    this.state = {
      storageFetchJson: [],
      loading: true,
      compare: [],
    };
  }

  componentDidMount() {
    this.startFetchIds();
  }

  plusQuantity(currentValue) {
    const currentComponent = this;
    return () => {
      const storageFetchJsonCopy = currentComponent.state.storageFetchJson;
      storageFetchJsonCopy.find((thisValue) => thisValue === currentValue).count += 1;
      this.setState({
        storageFetchJson: storageFetchJsonCopy,
      });
      const storageIds = JSON.parse(localStorage.getItem('productId'));
      storageIds.push(currentValue.id);
      localStorage.setItem('productId', JSON.stringify(storageIds));
    };
  }

  minusQuantity(currentValue) {
    const currentComponent = this;
    return () => {
      const storageFetchJsonCopy = currentComponent.state.storageFetchJson;
      storageFetchJsonCopy.find((thisValue) => thisValue === currentValue).count -= 1;
      this.setState({
        storageFetchJson: storageFetchJsonCopy,
      });
      const storageIds = JSON.parse(localStorage.getItem('productId'));
      const IndexPos = storageIds.indexOf(currentValue.id);
      storageIds.splice(IndexPos, 1);
      localStorage.setItem('productId', JSON.stringify(storageIds));
    };
  }

  deleteAll(currentValue) {
    const currentComponent = this;
    return () => {
      const storageFetchJsonCopy = currentComponent.state.storageFetchJson;
      const exactValue = storageFetchJsonCopy.find(
        (thisValue) => thisValue === currentValue,
      );
      const IndexPos = storageFetchJsonCopy.indexOf(exactValue);
      storageFetchJsonCopy.splice(IndexPos, 1);
      this.setState({
        storageFetchJson: storageFetchJsonCopy,
      });
      const storageIds = JSON.parse(localStorage.getItem('productId'));
      const newStorageIds = storageIds.filter(
        (thisValue) => thisValue !== currentValue.id,
      );
      localStorage.setItem('productId', JSON.stringify(newStorageIds));
    };
  }

  async fetchIds(id) {
    const response = await fetch(
      `https://api.mercadolibre.com/items/${id}?include_attributes=all`,
    );
    const json = await response.json();
    const arrayIds = JSON.parse(localStorage.getItem('productId'));
    const filteredQuantity = arrayIds.filter(
      (currentValue) => currentValue === id,
    ).length;
    json.count = filteredQuantity;
    this.configState(json, id);
  }

  configState(object, id) {
    const { compare } = this.state;
    const compareIncludes = compare.includes(id);
    const { title, price, count, thumbnail } = object;
    const nObj = { title, price, count, id, thumbnail };

    if (compareIncludes === false) {
      this.setState((previousState) => ({
        storageFetchJson: [...previousState.storageFetchJson, nObj],
        loading: false,
        compare: [...previousState.compare, id],
      }));
    }
  }

  startFetchIds() {
    const arrayIds = JSON.parse(localStorage.getItem('productId'));
    arrayIds.map((currentValue) => this.fetchIds(currentValue));
  }

  render() {
    const { storageFetchJson, loading } = this.state;
    if (localStorage.productId === '[]') {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>
      );
    }
    if (loading === true) {
      return <p>Carregando...</p>;
    }
    const map = storageFetchJson.map((currentValue) => {
      const { id, title, price, thumbnail } = currentValue;
      return (
        <div key={ id }>
          <p data-testid="shopping-cart-product-name">{title}</p>
          <img src={ thumbnail } alt="product-sample" />
          <p>{ price }</p>
          <p data-testid="shopping-cart-product-quantity">
            {currentValue.count}
          </p>
          <button
            data-testid="product-increase-quantity"
            onClick={ this.plusQuantity(currentValue) }
            type="button"
          >
            +
          </button>
          <button
            data-testid="product-decrease-quantity"
            onClick={ this.minusQuantity(currentValue) }
            type="button"
          >
            -
          </button>
          <button type="button" onClick={ this.deleteAll(currentValue) }>X</button>
        </div>
      );
    });
    return (
      <div>
        {map}
        <SendToShoppingFinish storageFetchJson={ storageFetchJson } />
      </div>
    );
  }
}

export default ShoppingCart;
