import { filterProducts } from "../services/productService.js";
import { renderProductCards } from "../components/productTables.js";

/**
 * Хайлт, шүүлтийн event-үүдийг холбоно.
 * allProducts — бүх бүтээгдэхүүний массив
 */
export function bindProductSearchEvents(allProducts) {
  const input = document.getElementById("productSearchInput");
  const button = document.getElementById("productSearchBtn");
  const categorySelect = document.getElementById("categoryFilter");
  const levelSelect = document.getElementById("levelFilter");
  const inStockCheckbox = document.getElementById("inStockOnly");
  const resultsEl = document.getElementById("productResults");
  const countEl = document.getElementById("resultCount");

  const runFilter = () => {
    let filtered = filterProducts(allProducts, {
      query: input?.value ?? "",
      category: categorySelect?.value ?? "all",
      inStockOnly: Boolean(inStockCheckbox?.checked),
    });

    // Түвшингээр нэмэлт шүүлт
    const level = levelSelect?.value ?? "all";
    if (level !== "all") {
      filtered = filtered.filter((p) => p.level === level);
    }

    if (resultsEl) {
      resultsEl.innerHTML = renderProductCards(filtered);
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
  levelSelect?.addEventListener("change", runFilter);
  inStockCheckbox?.addEventListener("change", runFilter);

  // Ангиллын sidebar item дээр дарахад
  document.querySelectorAll(".category-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      document.querySelectorAll(".category-item").forEach((el) => {
        el.classList.remove("is-active");
      });
      item.classList.add("is-active");

      if (categorySelect) {
        categorySelect.value = item.dataset.category || "all";
      }

      runFilter();
    });
  });
}