export function renderCategoryListSidebar(categories = []) {
  if (!categories.length) {
    return `
      <div class="box">
        <h3 class="title is-6">Ангилал</h3>
        <p class="is-size-7 has-text-grey">Ангилал олдсонгүй.</p>
      </div>
    `;
  }

  const items = categories
    .map(
      (cat) => `
      <li>
        <a class="category-item" data-category="${cat}">
          ${categoryLabel(cat)}
        </a>
      </li>
    `,
    )
    .join("");

  return `
    <div class="box">
      <h3 class="title is-6">Ангилал</h3>
      <aside class="menu">
        <ul class="menu-list">
          <li>
            <a class="category-item is-active" data-category="all">
              Бүх ангилал
            </a>
          </li>
          ${items}
        </ul>
      </aside>
    </div>
  `;
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