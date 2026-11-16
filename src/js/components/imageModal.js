export function renderImageModal() {
  return `
    <div class="modal" id="imageModal">
      <div class="modal-background" data-close-image></div>
      <div class="modal-content" style="max-width: 640px;">
        <p class="image"><img id="imageModalImg" src="" alt="Product" style="border-radius: 8px;" /></p>
      </div>
      <button class="modal-close is-large" aria-label="close" data-close-image></button>
    </div>
  `;
}
export function bindImageModalEvents() {
  document.querySelectorAll("[data-product-image]").forEach((img) => {
    img.addEventListener("click", () => openImageModal(img.getAttribute("src"), img.getAttribute("alt") || ""));
  });
  document.querySelectorAll("[data-close-image]").forEach((el) => {
    el.addEventListener("click", closeImageModal);
  });
}
function openImageModal(src, alt) {
  const modal = document.getElementById("imageModal");
  const img = document.getElementById("imageModalImg");
  if (!modal || !img || !src) return;
  img.src = src; img.alt = alt; modal.classList.add("is-active");
}
function closeImageModal() {
  const modal = document.getElementById("imageModal");
  const img = document.getElementById("imageModalImg");
  if (!modal || !img) return;
  modal.classList.remove("is-active"); img.src = "";
}
