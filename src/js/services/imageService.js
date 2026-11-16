/**
 * Бүтээгдэхүүний зургийн замыг буцаана.
 * Зураг байхгүй бол placeholder буцаана.
 */
export function getProductImage(product) {
  if (product?.image) {
    return product.image;
  }

  // Зураг байхгүй үед placeholder
  return "./img/products/placeholder.png";
}
