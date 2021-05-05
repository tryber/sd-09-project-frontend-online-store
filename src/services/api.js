export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const endpointRequest = await fetch(endpoint);
  const endpointResponse = await endpointRequest.json();
  return endpointResponse;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const endpointRequest = await fetch(endpoint);
  const endpointResponse = await endpointRequest.json();
  return endpointResponse;
}

export async function getProductById(itemId) {
  const endpoint = `https://api.mercadolibre.com/items?ids=${itemId}`;
  const endpointRequest = await fetch(endpoint);
  const endpointResponse = await endpointRequest.json();
  return endpointResponse;
}
