import { getLocalizedValue } from "../i18n/i18n.js";
import { formatPrice, safeValue } from "../fn/format.js";

export function renderProductCards(products) {
  if (!products.length) {
    return `
      <div class="notification is-warning is-light">
        Тохирох бүтээгдэхүүн олдсонгүй.
      </div>
    `;
  }

  return `
    <div class="columns is-multiline">
      ${products
        .map(
          (product) => `
        <div class="column is-12-mobile is-6-tablet is-4-desktop">
          <div class="box product-card">
            <p class="title is-6">${getLocalizedValue(product.name)}</p>
            <p class="subtitle is-7 has-text-grey">${safeValue(product.brand)}</p>
            <p class="is-size-7">${getLocalizedValue(product.description)}</p>

            <div class="tags mt-3">
              <span class="tag is-info is-light">${product.category}</span>
              <span class="tag is-light">${safeValue(product.level)}</span>
              <span class="tag is-light">${safeValue(product.size)}</span>
              <span class="tag ${product.inStock ? "is-success" : "is-danger"} is-light">
                ${product.inStock ? "Бэлэн" : "Дууссан"}
              </span>
            </div>

            <p class="has-text-weight-bold has-text-primary is-size-5 mt-3">
              ${formatPrice(product.price)}
            </p>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
}