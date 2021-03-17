export async function getCategories() {
  // Implemente aqui
  const requestCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());

  return requestCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const requestProductsAndQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json());

  return requestProductsAndQuery;
}
