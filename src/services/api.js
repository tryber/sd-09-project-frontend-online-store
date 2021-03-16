export async function getCategories() {
  // Implemente aqui
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const object = await response.json();
    return object;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(category, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${category}&q=${query}`);
    const object = await response.json();
    return object;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductFromId(id) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items?ids=${id}`);
    const object = await response.json();
    return object;
  } catch (error) {
    console.log(error);
  }
}
