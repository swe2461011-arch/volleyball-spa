import { t } from "../i18n/i18n.js";
import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderNotFoundPage() {
  const app = document.getElementById("app");
  const content = `
    <div class="box clean-box has-text-centered">
      <p class="is-size-1 has-text-grey">404</p>
      <h2 class="title is-4">${t("notFound.title")}</h2>
      <p class="has-text-grey mb-4">${t("notFound.text")}</p>
      <a href="#/overview" class="button is-dark">${t("notFound.back")}</a>
    </div>
  `;
  app.innerHTML = renderPageLayout({ title: t("notFound.title"), content });
}
