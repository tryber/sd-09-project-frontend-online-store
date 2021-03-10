export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(url).then((data) => data.json());
}

export async function getProductsFromCategoryAndQuery( categoryId, query ) 

  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  return fetch(url).then((data) => data.json());
}
