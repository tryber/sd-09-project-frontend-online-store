export async function getCategories() {
  try {
    const categoriesJSON = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    return categoriesJSON.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, QUERY) {
  try {
    const propductsJson = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${QUERY}`);
    return propductsJson.json();
  } catch (error) {
    console.log(error);
  }
}
