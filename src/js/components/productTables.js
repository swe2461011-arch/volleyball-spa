import { t, getLocalizedValue } from "../i18n/i18n.js";
import { formatPrice, safeValue } from "../fn/format.js";
import { getProductImage } from "../services/imageService.js";

export function renderProductCards(products) {
  if (!products.length) {
    return `<div class="notification is-warning is-light">${t("search.noResults")}</div>`;
  }

  return `
    <div class="columns is-multiline product-grid">
      ${products
        .map(
          (product) => `
        <div class="column is-6-mobile is-4-tablet is-3-desktop">
          <div class="product-card-store">
            <figure class="product-image-wrap">
              <img
                src="${getProductImage(product)}"
                alt="${getLocalizedValue(product.name)}"
                data-product-image
                loading="lazy"
                onerror="this.src='./img/products/placeholder.png'"
              />
            </figure>
            <div class="product-card-body">
              <p class="product-brand">${safeValue(product.brand)}</p>
              <p class="product-name">${getLocalizedValue(product.name)}</p>
              <p class="product-meta">
                <span>${t("search.size")}: ${safeValue(product.size)}</span>
                ·
                <span>${t("genders." + (product.gender || "unisex"))}</span>
              </p>
              <p class="product-price">${formatPrice(product.price)}</p>
              <span class="tag is-small ${product.inStock ? "is-success is-light" : "is-danger is-light"}">
                ${product.inStock ? t("search.inStock") : t("search.outOfStock")}
              </span>
            </div>
          </div>
        </div>`,
        )
        .join("")}
    </div>
  `;
}
