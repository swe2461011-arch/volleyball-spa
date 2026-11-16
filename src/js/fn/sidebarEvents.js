/**
 * Sidebar-ийн category item дээр дарахад active class солино.
 * callback-оор сонгогдсон category-г буцаана.
 */
export function bindCategoryList(onSelect) {
  const items = document.querySelectorAll(".category-item");

  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();

      // Бүх item-ээс active хасна
      items.forEach((el) => el.classList.remove("is-active"));

      // Дарсан item дээр active нэмнэ
      item.classList.add("is-active");

      const category = item.dataset.category || "all";

      if (typeof onSelect === "function") {
        onSelect(category);
      }
    });
  });
}

/**
 * Sidebar-ийг ерөнхийд нь бэлэн болгоно (хэрэв нэмэлт event хэрэгтэй бол энд нэмнэ).
 */
export function bindSidebar() {
  // Одоогоор нэмэлт логик байхгүй.
  // Дараа нь collapse, toggle гэх мэт нэмж болно.
}