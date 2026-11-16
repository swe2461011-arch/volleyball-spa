import { getLocalizedValue } from "../i18n/i18n.js";
import { formatPrice, safeValue } from "../fn/format.js";
import { getProductImage } from "../services/imageService.js";
import { renderTableLayout } from "../layouts/tableLayout.js";

/**
 * Бүтээгдэхүүнүүдийг карт хэлбэрээр харуулна.
 */
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
            <figure class="image is-4by3 mb-3">
              <img
                src="${getProductImage(product)}"
                alt="${getLocalizedValue(product.name)}"
                style="object-fit: cover; border-radius: 6px;"
                onerror="this.src='./img/products/placeholder.png'"
              />
            </figure>

            <p class="title is-6">${getLocalizedValue(product.name)}</p>
            <p class="subtitle is-7 has-text-grey">${safeValue(product.brand)}</p>
            <p class="is-size-7">${getLocalizedValue(product.description)}</p>

            <div class="tags mt-3">
              <span class="tag is-info is-light">${categoryLabel(product.category)}</span>
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

/**
 * Бүтээгдэхүүнүүдийг хүснэгт хэлбэрээр харуулна.
 */
export function renderProductTable(products) {
  if (!products.length) {
    return renderTableLayout({
      emptyMessage: "Тохирох бүтээгдэхүүн олдсонгүй.",
    });
  }

  const headers = ["Зураг", "Нэр", "Брэнд", "Ангилал", "Үнэ", "Нөөц"];

  const rows = products
    .map(
      (p) => `
      <tr>
        <td>
         <img
  src="${getProductImage(product)}"
  alt="${getLocalizedValue(product.name)}"
  data-product-image
  style="object-fit: cover; border-radius: 6px; cursor: pointer;"
  onerror="this.src='./img/products/placeholder.png'"
/>
        </td>
        <td>${getLocalizedValue(p.name)}</td>
        <td>${safeValue(p.brand)}</td>
        <td>${categoryLabel(p.category)}</td>
        <td class="price-cell">${formatPrice(p.price)}</td>
        <td class="${p.inStock ? "stock-ok" : "stock-out"}">
          ${p.inStock ? "Бэлэн" : "Дууссан"}
        </td>
      </tr>
    `,
    )
    .join("");

  return renderTableLayout({ headers, rows });
}

function categoryLabel(category) {
  const map = {
    ball: "Бөмбөг",
    clothing: "Хувцас",
    shoes: "Гутал",
    protection: "Хамгаалалт",
    equipment: "Бусад хэрэгсэл",
  };
  return map[category] || category;
}