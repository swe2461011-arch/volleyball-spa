import { t } from "../i18n/i18n.js";
import { renderPageLayout } from "../layouts/pageLayout.js";

const brands = [
  { key: "ready", label: "Бэлэн бараа", labelEn: "Ready stock", img: "./img/products/brand-ready.jpg", href: "#/search", cat: "all" },
  { key: "mizuno", label: "MIZUNO", labelEn: "MIZUNO", img: "./img/products/brand-mizuno.jpg", href: "#/search", brand: "Mizuno" },
  { key: "asics", label: "ASICS", labelEn: "ASICS", img: "./img/products/brand-asics.jpg", href: "#/search", brand: "Asics" },
  { key: "rigorer", label: "RIGORER", labelEn: "RIGORER", img: "./img/products/brand-rigorer.jpg", href: "#/search", brand: "Nike" },
  { key: "zamst", label: "ZAMST", labelEn: "ZAMST", img: "./img/products/brand-zamst.jpg", href: "#/search", cat: "protection" },
];

const features = [
  { href: "#/search", icon: "fa-bag-shopping", key: "products" },
  { href: "#/budget", icon: "fa-calculator", key: "budget" },
  { href: "#/guides", icon: "fa-book-open", key: "guides" },
];

export function renderOverviewPage() {
  const app = document.getElementById("app");
  const lang = localStorage.getItem("language") || "mn";

  const content = `
    <div class="home-hero-clean">
      <h2 class="title is-3 has-text-centered">${t("overview.welcome")}</h2>
      <p class="subtitle is-5 has-text-centered has-text-grey">${t("overview.description")}</p>
      <p class="has-text-centered is-size-6 has-text-grey-light mb-5">${t("overview.heroHint")}</p>
      <div class="has-text-centered">
        <a href="#/search" class="button is-dark is-medium">
          <span class="icon"><i class="fas fa-search"></i></span>
          <span>${t("nav.search")}</span>
        </a>
      </div>
    </div>

    <h3 class="title is-5 mt-6 mb-4">${t("overview.brandsTitle")}</h3>
    <div class="brand-grid">
      ${brands
        .map(
          (b) => `
        <a class="brand-tile" href="${b.href}" data-brand="${b.brand || ""}" data-cat="${b.cat || ""}">
          <div class="brand-tile-img">
            <img src="${b.img}" alt="${b.label}" loading="lazy" onerror="this.src='./img/products/placeholder.png'" />
          </div>
          <p class="brand-tile-label">${lang === "en" ? b.labelEn : b.label}</p>
        </a>`,
        )
        .join("")}
    </div>

    <div class="columns mt-6">
      ${features
        .map(
          (f) => `
        <div class="column is-4">
          <a class="box app-feature-clean" href="${f.href}">
            <span class="icon is-large has-text-dark"><i class="fas ${f.icon} fa-2x"></i></span>
            <h3 class="title is-5 mt-3">${t(`overview.features.${f.key}.title`)}</h3>
            <p class="has-text-grey">${t(`overview.features.${f.key}.text`)}</p>
          </a>
        </div>`,
        )
        .join("")}
    </div>
  `;

  app.innerHTML = renderPageLayout({
    title: "",
    content: content,
    titleClass: "",
  });
}
