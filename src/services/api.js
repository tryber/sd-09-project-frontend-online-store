export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json())
    .then((result) => result);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const result = await request.json();
  return result;
}
