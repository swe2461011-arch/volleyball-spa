import { t } from "../i18n/i18n.js";

export function renderCategoryListSidebar(categories = []) {
  const items = categories
    .map(
      (cat) => `
      <li>
        <a class="category-item" data-category="${cat}">
          ${t("categories." + cat)}
        </a>
      </li>
    `,
    )
    .join("");

  return `
    <div class="box">
      <h3 class="title is-6">${t("search.categories")}</h3>
      <aside class="menu">
        <ul class="menu-list">
          <li>
            <a class="category-item is-active" data-category="all">
              ${t("search.allCategories")}
            </a>
          </li>
          ${items}
        </ul>
      </aside>
    </div>
  `;
}
