export async function getCategories() {
  const categoriesApi = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categoriesApiJson = await categoriesApi.json();
  return categoriesApiJson;
}

export function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!query) {
    const urlApi = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    return fetch(urlApi).then((data) => data.json());
  }
  const urlApi2 = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  return fetch(urlApi2).then((data) => data.json());
}
