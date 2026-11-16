import { t } from "../i18n/i18n.js";
import { renderPageLayout } from "../layouts/pageLayout.js";
import { getProducts } from "../services/productService.js";
import { formatPrice } from "../fn/format.js";
import { getProductImage } from "../services/imageService.js";

const CATEGORIES = [
  { key: "shoes", icon: "fa-shoe-prints" },
  { key: "clothing", icon: "fa-shirt" },
  { key: "protection", icon: "fa-shield-halved" },
  { key: "ball", icon: "fa-volleyball" },
  { key: "bags", icon: "fa-bag-shopping" },
];

const BRANDS = ["Asics", "Mizuno", "Rigorer", "Mikasa", "Zamst"];

const FEATURED_KEYWORDS = [
  "sky elite",
  "lightning select",
  "metarise",
  "momentum elite",
  "mikasa",
  "rigorer bp",
];

export async function renderOverviewPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    title: "",
    content: `<div class="home-v"><p class="has-text-grey has-text-centered py-5">${t("search.loading")}</p></div>`,
  });

  let featured = [];
  try {
    const products = await getProducts();
    const used = new Set();
    for (const kw of FEATURED_KEYWORDS) {
      const hit = products.find(
        (p) =>
          !used.has(p.id) &&
          (p.name?.mn || "").toLowerCase().includes(kw) &&
          String(p.image || "").startsWith("http"),
      );
      if (hit) {
        used.add(hit.id);
        featured.push(hit);
      }
    }
    if (featured.length < 4) {
      for (const p of products) {
        if (featured.length >= 6) break;
        if (used.has(p.id)) continue;
        if (String(p.image || "").startsWith("http") && p.category === "shoes") {
          used.add(p.id);
          featured.push(p);
        }
      }
    }
    featured = featured.slice(0, 6);
  } catch (e) {
    console.error(e);
  }

  const content = `
    <div class="home-v">
      <header class="home-v-head">
        <h1 class="home-v-title">${t("nav.brand")}</h1>
        <p class="home-v-desc">${t("overview.description")}</p>
        <div class="home-v-actions">
          <a class="home-v-cta" href="#/search">${t("nav.search")}</a>
          <a class="home-v-cta home-v-cta--ghost" href="#/budget">${t("nav.budget")}</a>
        </div>
      </header>

      <div class="home-v-brands">
        ${BRANDS.map((b) => `<span class="home-v-brand">${b}</span>`).join("")}
      </div>

      ${
        featured.length
          ? `
      <section class="home-v-section">
        <div class="home-v-section-row">
          <h2>${t("overview.featuredTitle")}</h2>
          <a href="#/search">${t("overview.seeAll")}</a>
        </div>
        <div class="home-v-grid">
          ${featured
            .map(
              (p) => `
            <a class="home-v-card" href="#/search">
              <div class="home-v-card-img">
                <img src="${getProductImage(p)}" alt="" loading="lazy" />
              </div>
              <div class="home-v-card-body">
                <span class="home-v-card-brand">${p.brand || ""}</span>
                <span class="home-v-card-name">${(p.name && (p.name.mn || p.name.en)) || ""}</span>
                <span class="home-v-card-price">${formatPrice(p.price)}</span>
              </div>
            </a>`,
            )
            .join("")}
        </div>
      </section>`
          : ""
      }

      <section class="home-v-section">
        <h2 class="home-v-section-title">${t("overview.categoriesTitle")}</h2>
        <div class="home-v-cats">
          ${CATEGORIES.map(
            (c) => `
            <a class="home-v-cat" href="#/search">
              <span class="home-v-cat-icon"><i class="fas ${c.icon}"></i></span>
              <span>${t("categories." + c.key)}</span>
            </a>`,
          ).join("")}
        </div>
      </section>

      <nav class="home-v-footnav">
        <a href="#/guides">${t("nav.guides")}</a>
        <span>·</span>
        <a href="#/contact">${t("nav.contact")}</a>
      </nav>
    </div>
  `;

  app.innerHTML = renderPageLayout({ title: "", content });
}
