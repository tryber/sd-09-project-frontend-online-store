export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const categoriesPromisse = await fetch(endpoint);
  const categoriesJson = categoriesPromisse.json();
  return categoriesJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const productsPromisse = await fetch(endpoint);
  const productsJson = productsPromisse.json();
  return productsJson;
}

export async function getProductsFromQuery(query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const productsPromisse = await fetch(endpoint);
  const productsJson = productsPromisse.json();
  return productsJson;
}

export async function listProductsInCategory(category) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${category}`;
  const productsPromisse = await fetch(endpoint);
  const productsJson = productsPromisse.json();
  return productsJson;
}
