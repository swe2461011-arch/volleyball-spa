import { CONFIG } from "../config.js";

let cachedProducts = null;

export async function getProducts() {
  if (cachedProducts) return cachedProducts;
  const response = await fetch(CONFIG.productsDataUrl);
  if (!response.ok) throw new Error("Failed to load products: " + response.status);
  const data = await response.json();
  cachedProducts = Array.isArray(data) ? data : [];
  return cachedProducts;
}

export function filterProducts(
  products,
  {
    query = "",
    category = "all",
    gender = "all",
    level = "all",
    size = "all",
    color = "all",
    inStockOnly = false,
  } = {},
) {
  const q = query.trim().toLowerCase();
  return products.filter((product) => {
    if (category !== "all" && product.category !== category) return false;
    if (gender !== "all" && product.gender !== gender) return false;
    if (level !== "all" && product.level !== level) return false;
    if (size !== "all" && String(product.size) !== String(size)) return false;
    if (color !== "all" && product.color !== color) return false;
    if (inStockOnly && !product.inStock) return false;
    if (!q) return true;
    const nameEn = product.name?.en?.toLowerCase() ?? "";
    const nameMn = product.name?.mn?.toLowerCase() ?? "";
    const brand = product.brand?.toLowerCase() ?? "";
    return nameEn.includes(q) || nameMn.includes(q) || brand.includes(q);
  });
}
