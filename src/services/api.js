export async function getCategories() {
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categories = await response.json();
    return categories;
  } catch (error) {
    throw new Error('Failed to fetch API and get categories');
  }
}

export async function getProductsFromCategoryAndQuery(categorieId, query) {
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categorieId}&q=${query}`;
    const response = await fetch(endpoint);
    const products = await response.json();
    return products;
  } catch (error) {
    throw new Error('Failed to fetch API and get products');
  }
}

export async function getProductFromID(id) {
  try {
    const endpoint = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(endpoint);
    const product = await response.json();
    return product;
  } catch (error) {
    throw new Error('Failed to fetch API and get product');
  }
}
