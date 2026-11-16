import { renderPageLayout } from "../layouts/pageLayout.js";
import { renderNotification } from "../layouts/notificationLayout.js";
import { getProducts } from "../services/productService.js";
import { renderSearchSidebar } from "../components/searchSidebar.js";
import { renderSearchSettingsSidebar } from "../components/searchSettingsSidebar.js";
import { renderCategoryListSidebar } from "../components/searchCategoryListSidebar.js";
import { renderProductCards } from "../components/productTables.js";
import { bindProductSearchEvents } from "../fn/productSearchEvents.js";
import { renderImageModal, bindImageModalEvents } from "../components/imageModal.js";
import { t } from "../i18n/i18n.js";

export async function renderSearchPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    title: t("search.title"),
    content: renderNotification(t("search.loading"), "info"),
  });

  try {
    const products = await getProducts();
    const categories = [...new Set(products.map((p) => p.category))];

    app.innerHTML = renderPageLayout({
      title: t("search.title"),
      content: `
        <div class="app-shell">
          <aside class="app-sidebar">
            ${renderSearchSidebar()}
            ${renderSearchSettingsSidebar()}
            ${renderCategoryListSidebar(categories)}
          </aside>
          <div class="app-main">
            <div class="mb-3">
              <span class="tag is-primary is-medium" id="resultCount">
                ${t("search.results")}: ${products.length}
              </span>
            </div>
            <div id="productResults">
              ${renderProductCards(products)}
            </div>
          </div>
        </div>
        ${renderImageModal()}
      `,
    });

    bindProductSearchEvents(products);
    bindImageModalEvents();
  } catch (error) {
    console.error(error);
    app.innerHTML = renderPageLayout({
      title: t("search.title"),
      content: renderNotification(t("search.failed"), "danger"),
    });
  }
}
