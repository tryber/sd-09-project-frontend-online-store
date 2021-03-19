export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const fetchResponse = await fetch(url);
  const response = await fetchResponse.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const fetchResponse = await fetch(url);
  const response = await fetchResponse.json();
  return response;
}

export async function getProductDetails(id) {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const fetchResponse = await fetch(url);
  const response = await fetchResponse.json();
  return response;
}
