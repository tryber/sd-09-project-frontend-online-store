const baseURL = 'https://api.mercadolibre.com/sites/MLB/';

export async function getCategories() {
  const result = await fetch(`${baseURL}categories`);
  return result.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`${baseURL}search?category=${categoryId}&q=${query}`);
  const resultObj = await (response).json();
  return resultObj;
}
