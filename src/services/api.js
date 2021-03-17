export async function getCategories() {
  const API_URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(API_URL).then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const API_URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  return fetch(API_URL).then((response) => response.json());
}
