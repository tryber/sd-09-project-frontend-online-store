export async function getCategories() {
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    return await response.json();
  } catch (error) {
    console.log(`Erro ao consultar API do mercado livre --- ${error}`);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    return await products.json();
  } catch (error) {
    console.log(`Erro ao consultar API do mercado livre --- ${error}`);
  }
}
