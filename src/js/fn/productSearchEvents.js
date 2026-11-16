import { filterProducts } from "../services/productService.js";
import { renderProductCards } from "../components/productTables.js";
import { bindImageModalEvents } from "../components/imageModal.js";
import { t } from "../i18n/i18n.js";

export function bindProductSearchEvents(allProducts) {
  const input = document.getElementById("productSearchInput");
  const button = document.getElementById("productSearchBtn");
  const categorySelect = document.getElementById("categoryFilter");
  const genderSelect = document.getElementById("genderFilter");
  const levelSelect = document.getElementById("levelFilter");
  const sizeSelect = document.getElementById("sizeFilter");
  const colorSelect = document.getElementById("colorFilter");
  const inStockCheckbox = document.getElementById("inStockOnly");
  const resultsEl = document.getElementById("productResults");
  const countEl = document.getElementById("resultCount");

  const runFilter = () => {
    const filtered = filterProducts(allProducts, {
      query: input?.value ?? "",
      category: categorySelect?.value ?? "all",
      gender: genderSelect?.value ?? "all",
      level: levelSelect?.value ?? "all",
      size: sizeSelect?.value ?? "all",
      color: colorSelect?.value ?? "all",
      inStockOnly: Boolean(inStockCheckbox?.checked),
    });

    if (resultsEl) resultsEl.innerHTML = renderProductCards(filtered);
    if (countEl) countEl.textContent = `${t("search.results")}: ${filtered.length}`;
    bindImageModalEvents();
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
  genderSelect?.addEventListener("change", runFilter);
  levelSelect?.addEventListener("change", runFilter);
  sizeSelect?.addEventListener("change", runFilter);
  colorSelect?.addEventListener("change", runFilter);
  inStockCheckbox?.addEventListener("change", runFilter);

  document.querySelectorAll(".category-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll(".category-item").forEach((el) => el.classList.remove("is-active"));
      item.classList.add("is-active");
      if (categorySelect) categorySelect.value = item.dataset.category || "all";
      runFilter();
    });
  });
}
