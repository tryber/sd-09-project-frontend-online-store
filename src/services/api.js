export async function getCategories() {
  // Implemente aqui
  // estudei o código https://github.com/tryber/sd-09-project-frontend-online-store/pull/58/files
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const json = await response.json();
    return json;
  } catch (error) {
    return 'Requisição falhou';
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  try {
    const response = await fetch(endpoint);
    const json = await response.json();
    return json;
  } catch (error) {
    return 'Requisição falhou';
  }
}
