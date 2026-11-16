export function getProductImage(product) {
  if (product?.image) return product.image;
  return "./img/products/placeholder.png";
}
