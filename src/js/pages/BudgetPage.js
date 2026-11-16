import { t, getLocalizedValue } from "../i18n/i18n.js";
import { renderPageLayout } from "../layouts/pageLayout.js";
import { getProducts } from "../services/productService.js";
import { formatPrice } from "../fn/format.js";

const CATEGORY_KEYS = ["shoes", "clothing", "protection", "ball", "bags"];
const CAT_ICONS = {
  shoes: "fa-shoe-prints",
  clothing: "fa-shirt",
  protection: "fa-shield-halved",
  ball: "fa-volleyball",
  bags: "fa-bag-shopping",
};

export async function renderBudgetPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    title: t("budget.title"),
    content: `<div class="notification is-info is-light">${t("search.loading")}</div>`,
  });

  try {
    const products = await getProducts();
    const byCat = {};
    CATEGORY_KEYS.forEach((c) => {
      byCat[c] = products.filter((p) => p.category === c);
    });
    const totalCount = products.length;

    const content = `
      <p class="page-lead">${t("budget.intro")}</p>
      <p class="budget-count-hint has-text-weight-semibold mb-4">
        <span class="tag is-primary is-light">${t("budget.allModels")}: ${totalCount}</span>
      </p>

      <div class="field mb-4">
        <div class="control has-icons-left">
          <input id="budgetSearch" class="input" type="search" placeholder="${t("budget.searchPlaceholder")}" />
          <span class="icon is-left"><i class="fas fa-filter"></i></span>
        </div>
      </div>

      <div class="columns is-desktop">
        <div class="column is-7">
          <div class="budget-panel" id="budgetPanel">
            <div class="budget-panel-head">
              <span class="icon"><i class="fas fa-list-check"></i></span>
              <h3>${t("budget.pickItems")}</h3>
            </div>
            ${CATEGORY_KEYS.map((cat) => {
              const list = byCat[cat] || [];
              if (!list.length) return "";
              return `
                <div class="budget-cat" data-cat="${cat}">
                  <div class="budget-cat-title">
                    <i class="fas ${CAT_ICONS[cat] || "fa-box"}"></i>
                    ${t("categories." + cat)}
                    <span class="budget-cat-count">${list.length}</span>
                  </div>
                  ${list
                    .map(
                      (p) => `
                    <label class="budget-row" data-search="${(
                      getLocalizedValue(p.name) +
                      " " +
                      (p.brand || "") +
                      " " +
                      (p.size || "")
                    )
                      .toLowerCase()
                      .replace(/"/g, "")}">
                      <input type="checkbox" class="budget-check" data-id="${p.id}" data-price="${p.price}" />
                      <span class="budget-name">${getLocalizedValue(p.name)} <span class="budget-size">${p.size || ""}</span></span>
                      <span class="budget-price">${formatPrice(p.price)}</span>
                      <input type="number" class="input is-small budget-qty" data-id="${p.id}" min="1" value="1" disabled />
                    </label>`,
                    )
                    .join("")}
                </div>`;
            }).join("")}
          </div>
        </div>
        <div class="column is-5">
          <div class="budget-summary-card">
            <div class="budget-summary-head">
              <i class="fas fa-calculator"></i>
              <h3>${t("budget.summary")}</h3>
            </div>
            <div id="budgetLines" class="budget-lines"><p class="budget-empty">${t("budget.empty")}</p></div>
            <div class="budget-total-row">
              <span>${t("budget.total")}</span>
              <strong id="budgetTotal">${formatPrice(0)}</strong>
            </div>
            <button type="button" id="budgetClear" class="button is-light is-fullwidth mt-3">
              <span class="icon"><i class="fas fa-rotate-left"></i></span>
              <span>${t("budget.clear")}</span>
            </button>
          </div>
        </div>
      </div>
    `;

    app.innerHTML = renderPageLayout({
      title: t("budget.title"),
      content,
    });

    const totalEl = document.getElementById("budgetTotal");
    const linesEl = document.getElementById("budgetLines");

    function recalc() {
      let total = 0;
      const lines = [];
      document.querySelectorAll(".budget-check:checked").forEach((cb) => {
        const id = cb.dataset.id;
        const price = Number(cb.dataset.price) || 0;
        const qtyInput = document.querySelector(`.budget-qty[data-id="${id}"]`);
        const qty = Math.max(1, Number(qtyInput?.value) || 1);
        if (qtyInput) qtyInput.disabled = false;
        total += price * qty;
        const name = cb.parentElement?.querySelector(".budget-name")?.textContent || id;
        lines.push(`<li><span>${name} × ${qty}</span><span>${formatPrice(price * qty)}</span></li>`);
      });
      document.querySelectorAll(".budget-check:not(:checked)").forEach((cb) => {
        const qtyInput = document.querySelector(`.budget-qty[data-id="${cb.dataset.id}"]`);
        if (qtyInput) {
          qtyInput.disabled = true;
          qtyInput.value = "1";
        }
      });
      if (totalEl) totalEl.textContent = formatPrice(total);
      if (linesEl) {
        linesEl.innerHTML = lines.length
          ? `<ul class="budget-line-list">${lines.join("")}</ul>`
          : `<p class="budget-empty">${t("budget.empty")}</p>`;
      }
    }

    app.querySelectorAll(".budget-check, .budget-qty").forEach((el) => {
      el.addEventListener("change", recalc);
      el.addEventListener("input", recalc);
    });
    document.getElementById("budgetClear")?.addEventListener("click", () => {
      app.querySelectorAll(".budget-check").forEach((cb) => {
        cb.checked = false;
      });
      recalc();
    });

    document.getElementById("budgetSearch")?.addEventListener("input", (e) => {
      const q = (e.target.value || "").trim().toLowerCase();
      document.querySelectorAll(".budget-row").forEach((row) => {
        const hay = row.getAttribute("data-search") || "";
        row.style.display = !q || hay.includes(q) ? "" : "none";
      });
      document.querySelectorAll(".budget-cat").forEach((cat) => {
        const visible = [...cat.querySelectorAll(".budget-row")].some((r) => r.style.display !== "none");
        cat.style.display = visible ? "" : "none";
      });
    });
  } catch (e) {
    console.error(e);
    app.innerHTML = renderPageLayout({
      title: t("budget.title"),
      content: `<div class="notification is-danger is-light">${t("search.failed")}</div>`,
    });
  }
}
