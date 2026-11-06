import { CONFIG } from "../config.js";

let cachedProducts = null;

/**
 * Бүтээгдэхүүний жагсаалтыг JSON-оос уншина.
 * Нэг удаа уншсаны дараа cache хийж, дахин fetch хийхгүй.
 */
export async function getProducts() {
  if (cachedProducts) {
    return cachedProducts;
  }

  const response = await fetch(CONFIG.productsDataUrl);

  if (!response.ok) {
    throw new Error(`Failed to load products: ${response.status}`);
  }

  const data = await response.json();
  cachedProducts = Array.isArray(data) ? data : [];
  return cachedProducts;
}

/**
 * Каталогт байгаа ангиллуудыг буцаана.
 */
export async function getCategories() {
  const products = await getProducts();
  const set = new Set(products.map((p) => p.category));
  return Array.from(set);
}

/**
 * Хайлт, шүүлт хийхэд ашиглах функц.
 */
export function filterProducts(
  products,
  { query = "", category = "all", inStockOnly = false } = {},
) {
  const q = query.trim().toLowerCase();

  return products.filter((product) => {
    if (category !== "all" && product.category !== category) {
      return false;
    }

    if (inStockOnly && !product.inStock) {
      return false;
    }

    if (!q) {
      return true;
    }

    const nameEn = product.name?.en?.toLowerCase() ?? "";
    const nameMn = product.name?.mn?.toLowerCase() ?? "";
    const brand = product.brand?.toLowerCase() ?? "";
    const descEn = product.description?.en?.toLowerCase() ?? "";
    const descMn = product.description?.mn?.toLowerCase() ?? "";

    return (
      nameEn.includes(q) ||
      nameMn.includes(q) ||
      brand.includes(q) ||
      descEn.includes(q) ||
      descMn.includes(q)
    );
  });
}