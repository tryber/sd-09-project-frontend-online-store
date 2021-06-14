export async function getCategories() {
  const requestReturn = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await requestReturn.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let result;
  if (categoryId) {
    result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  } else {
    result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  }
  const itens = await result.json();
  return itens;
}
