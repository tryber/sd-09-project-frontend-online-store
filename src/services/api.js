async function fetchURL(searchCat) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/${searchCat}`);
  const json = await response.json();
  return json;
}

export async function getCategories() {
  // Implemente aqui
  return fetchURL('categories');
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  let url = 'search?';

  // Se tiver termo
  if (query) url += `q=${query}`;

  // Tendo as duas, adiciona &
  if (query && categoryId) url += '&';

  // Se tiver id de categoria
  if (categoryId) url += `category=${categoryId}`;

  return fetchURL(url);
}
