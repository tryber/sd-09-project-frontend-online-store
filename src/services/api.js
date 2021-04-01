export async function getCategories() {
  const apiCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const object = await apiCategories.json();
  return object;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let products = [];
  if (categoryId && query) {
    products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
      .then((res) => res.json());
  } else if (categoryId) {
    products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
      .then((res) => res.json());
  } else {
    products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then((res) => res.json());
  }
  return products;
}

export async function getProductByID(id) {
  const fetchProduct = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const object = await fetchProduct.json();
  return object;
}
