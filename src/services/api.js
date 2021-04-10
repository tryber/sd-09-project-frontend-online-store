export async function getCategories() {
  const requestCategory = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const result = await requestCategory.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && query) return (await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)).json();
  if (categoryId) return (await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)).json();
  if (query) return (await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)).json();
}
