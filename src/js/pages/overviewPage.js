import { t } from "../i18n/i18n.js";
import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderOverviewPage() {
  const app = document.getElementById("app");

  const content = `
    <div class="box">
      <h2 class="title is-4">${t("overview.welcome")}</h2>
      <p>${t("overview.description")}</p>

      <a href="#/search" class="button is-primary mt-4">
        ${t("nav.search")}
      </a>
    </div>
  `;

  app.innerHTML = renderPageLayout({
    title: t("overview.title"),
    content: content,
  });
}