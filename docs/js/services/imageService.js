export function getProductImage(product) {
  const img = product?.image || "";
  if (!img) return "./img/products/placeholder.png";
  return img;
}
