import { createContext } from 'react';

const InputContext = createContext({
  inputValue: '',
  selectedCategory: '',
  cartProducts: [],
  reviews: [],
  setInputValue: () => {},
  setSelectedCategory: () => {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  saveNewRaview: () => {},
});
export default InputContext;
