export async function getCategories() {
  const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(endPoint);
  const categories = await response.json();
  return categories;
  // return fetch(endPoint).then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  let endPoint = '';
  if (categoryId) {
    endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  } else {
    endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  }
  const response = await fetch(endPoint);
  const products = await response.json();
  return products;
}

// export async function getCategoriesFromQuery(query) {
//   // Implemente aqui
//   const endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
//   const response = await fetch(endPoint);
//   const products = await response.json();
//   return products;
//   // return fetch(endPoint).then((response) => response.json());
// }
