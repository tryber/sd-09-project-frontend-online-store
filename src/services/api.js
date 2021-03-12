export async function getCategories() {
  const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const response = await fetch(endPoint);
    const object = await response.json();

    if (object.error) throw new Error(object.error);

    return object;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  try {
    const response = await fetch(endPoint);
    const object = await response.json();

    if (object.error) throw new Error(object.error);

    return object;
  } catch (error) {
    console.log(error);
  }
}

export async function getProduct(productId) {
  // endpoint do ThiagoCarreiraVallim
  const endPoint = `https://api.mercadolibre.com/items?ids=${productId}`;
  try {
    const response = await fetch(endPoint);
    const object = await response.json();

    if (object.error) throw new Error(object.error);

    return object;
  } catch (error) {
    console.log(error);
  }
}
