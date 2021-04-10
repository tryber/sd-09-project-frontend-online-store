export async function getCategories() {
  try {
    const fetchCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categories = await fetchCategories.json();
    return categories;
  } catch (error) {
    console.warn(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const fetchProducts = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const products = await fetchProducts.json();
    return products;
  } catch (error) {
    console.warn(error);
  }
}
