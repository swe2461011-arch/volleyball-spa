import { t } from "../i18n/i18n.js";
import { renderPageLayout } from "../layouts/pageLayout.js";

// Нүүр хуудсанд харуулах 3 хэсэг: холбоос, дүрс, орчуулгын түлхүүр
const features = [
  { href: "#/search", icon: "fa-bag-shopping", key: "products" },
  { href: "#/budget", icon: "fa-calculator", key: "budget" },
  { href: "#/guides", icon: "fa-book-open", key: "guides" },
];

export function renderOverviewPage() {
  const app = document.getElementById("app");

  const content = `
    <div class="app-hero">
      <span class="icon is-large"><i class="fas fa-volleyball fa-3x"></i></span>
      <h2 class="title is-3 mt-3">${t("overview.welcome")}</h2>
      <p class="subtitle is-5">${t("overview.description")}</p>

      <a href="#/search" class="button is-light is-medium">
        ${t("nav.search")}
      </a>
    </div>

    <div class="columns mt-5">
      ${features
        .map(
          (f) => `
        <div class="column is-4">
          <a class="box app-feature" href="${f.href}">
            <span class="icon is-large app-feature-icon"><i class="fas ${f.icon} fa-2x"></i></span>
            <h3 class="title is-5 mt-2">${t(`overview.features.${f.key}.title`)}</h3>
            <p>${t(`overview.features.${f.key}.text`)}</p>
          </a>
        </div>`,
        )
        .join("")}
    </div>
  `;

  app.innerHTML = renderPageLayout({
    title: t("overview.title"),
    content: content,
  });
}