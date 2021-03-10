export async function getCategories() {
  const fetchApi = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const receberJson = await fetchApi.json();
  return receberJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const fetchApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const receberJson = await fetchApi.json();
  return receberJson;
}
