export default function reshapeObjects(products) {
  return products.map(({
    title,
    thumbnail,
    price,
    id,
    attributes,
    available_quantity: availableQuantity,
    shipping: { free_shipping: freeShipping },
  }) => {
    attributes = attributes.map(({ name, value_name: value }) => ({ name, value }));
    return {
      id,
      title,
      thumbnail,
      price,
      attributes,
      availableQuantity,
      freeShipping,
    };
  });
}
