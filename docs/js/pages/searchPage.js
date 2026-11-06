import { renderPageLayout } from "../layouts/pageLayout.js";
import { getProducts, filterProducts } from "../services/productService.js";
import { t, getLocalizedValue } from "../i18n/i18n.js";

let allProducts = [];

export async function renderSearchPage() {
  const app = document.getElementById("app");

  // Эхлээд ачаалж байна гэсэн мэдэгдэл харуулна
  app.innerHTML = renderPageLayout({
    title: t("search.title") || "Бүтээгдэхүүн",
    content: `
      <div class="notification is-info is-light">
        Өгөгдөл ачаалж байна...
      </div>
    `,
  });

  try {
    allProducts = await getProducts();
    renderSearchUI(app, allProducts);
  } catch (error) {
    console.error(error);
    app.innerHTML = renderPageLayout({
      title: t("search.title") || "Бүтээгдэхүүн",
      content: `
        <div class="notification is-danger is-light">
          Бүтээгдэхүүний мэдээлэл ачаалахад алдаа гарлаа.
        </div>
      `,
    });
  }
}

function renderSearchUI(app, products) {
  const categories = [...new Set(products.map((p) => p.category))];

  const categoryOptions = [
    `<option value="all">Бүх ангилал</option>`,
    ...categories.map(
      (cat) => `<option value="${cat}">${cat}</option>`,
    ),
  ].join("");

  app.innerHTML = renderPageLayout({
    title: t("search.title") || "Бүтээгдэхүүн хайх",
    content: `
      <div class="box">
        <div class="columns is-multiline is-vcentered">
          <div class="column is-5">
            <div class="field has-addons">
              <div class="control is-expanded">
                <input
                  id="productSearchInput"
                  class="input"
                  type="search"
                  placeholder="Нэр, брэндээр хайх..."
                />
              </div>
              <div class="control">
                <button id="productSearchBtn" class="button is-primary">
                  Хайх
                </button>
              </div>
            </div>
          </div>

          <div class="column is-3">
            <div class="select is-fullwidth">
              <select id="categoryFilter">
                ${categoryOptions}
              </select>
            </div>
          </div>

          <div class="column is-4">
            <label class="checkbox">
              <input type="checkbox" id="inStockOnly" />
              Зөвхөн бэлэн бараа
            </label>
          </div>
        </div>
      </div>

      <div class="mb-3">
        <span class="tag is-primary is-medium" id="resultCount">
          Илэрц: ${products.length}
        </span>
      </div>

      <div id="productResults">
        ${renderProductList(products)}
      </div>
    `,
  });

  bindSearchEvents();
}

function renderProductList(products) {
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
          (p) => `
        <div class="column is-4">
          <div class="box">
            <p class="title is-6">${getLocalizedValue(p.name)}</p>
            <p class="subtitle is-7">${p.brand}</p>
            <p>${getLocalizedValue(p.description)}</p>
            <p class="has-text-weight-bold has-text-primary mt-2">
              ${p.price.toLocaleString()} ₮
            </p>
            <p class="is-size-7 mt-1">
              ${p.inStock ? "Бэлэн" : "Дууссан"} · ${p.category}
            </p>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
}

function bindSearchEvents() {
  const input = document.getElementById("productSearchInput");
  const button = document.getElementById("productSearchBtn");
  const categorySelect = document.getElementById("categoryFilter");
  const inStockCheckbox = document.getElementById("inStockOnly");

  const runFilter = () => {
    const filtered = filterProducts(allProducts, {
      query: input?.value ?? "",
      category: categorySelect?.value ?? "all",
      inStockOnly: Boolean(inStockCheckbox?.checked),
    });

    const resultsEl = document.getElementById("productResults");
    const countEl = document.getElementById("resultCount");

    if (resultsEl) {
      resultsEl.innerHTML = renderProductList(filtered);
    }
    if (countEl) {
      countEl.textContent = `Илэрц: ${filtered.length}`;
    }
  };

  button?.addEventListener("click", (e) => {
    e.preventDefault();
    runFilter();
  });

  input?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      runFilter();
    }
  });

  categorySelect?.addEventListener("change", runFilter);
  inStockCheckbox?.addEventListener("change", runFilter);
}