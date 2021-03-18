export async function getCategories() {
  const endPointCategories = 'https://api.mercadolibre.com/sites/MLB/categories';
  const resultFetch = await fetch(endPointCategories);
  const resultJson = await resultFetch.json();
  return resultJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId === '') {
    const endPointForQuery = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const fetchReturn = await fetch(endPointForQuery);
    const jsonReturn = await fetchReturn.json();
    return jsonReturn;
  }
  if (query === '') {
    const endPointForCategoryId = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    const fetchReturn = await fetch(endPointForCategoryId);
    const jsonReturn = await fetchReturn.json();
    return jsonReturn;
  }
  const endPointForTerm = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const fetchResul = await fetch(endPointForTerm);
  const jsonResult = await fetchResul.json();
  return jsonResult;
}
