async function cart(product) {
  if (localStorage.carrinho === undefined) {
    const { id, title } = product;
    const jsonObj = JSON.stringify([{ id, title, count: 1 }]);
    localStorage.setItem('carrinho', jsonObj);
  } else {
    const productJ = JSON.parse(localStorage.carrinho);
    const findProduct = productJ.find((data) => data.id === product.id);
    if (findProduct) {
      // aqui devo adicionar mais um ao count;
      const position = productJ.indexOf(findProduct);
      // console.log(position);
      productJ[position].count += 1;
      const jsonString = JSON.stringify(productJ);
      localStorage.setItem('carrinho', jsonString);
    } else {
      // Aqui ele adiciona um novo produto ao carrinho
      const { id, title } = product;
      productJ.push({ id, title, count: 1 });
      const newProducts = JSON.stringify(productJ);
      localStorage.setItem('carrinho', newProducts);
    }
  }
}

export default cart;
