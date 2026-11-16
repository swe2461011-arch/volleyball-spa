import { t } from "../i18n/i18n.js";
import { renderPageLayout } from "../layouts/pageLayout.js";

const GUIDE_KEYS = ["shoes", "size", "ball", "protection", "apparel", "bags", "level", "care"];

export function renderGuidesPage() {
  const app = document.getElementById("app");

  const cards = GUIDE_KEYS.map(
    (key) => `
    <div class="column is-6-tablet is-4-desktop">
      <div class="guide-card">
        <div class="guide-card-icon">
          <i class="fas ${t(`guides.items.${key}.icon`)}"></i>
        </div>
        <h3 class="guide-card-title">${t(`guides.items.${key}.title`)}</h3>
        <p class="guide-card-text">${t(`guides.items.${key}.text`)}</p>
      </div>
    </div>`,
  ).join("");

  const steps = [1, 2, 3, 4]
    .map(
      (n) => `
    <div class="guide-step">
      <div class="guide-step-num">${n}</div>
      <div>
        <h4 class="guide-step-title">${t(`guides.steps.s${n}.title`)}</h4>
        <p class="guide-step-text">${t(`guides.steps.s${n}.text`)}</p>
      </div>
    </div>`,
    )
    .join("");

  const brands = ["Asics", "Mizuno", "Nike", "Adidas", "Mikasa", "Molten", "Zamst", "Under Armour"];

  const content = `
    <p class="page-lead">${t("guides.intro")}</p>

    <div class="panel-card panel-card--accent mb-5">
      <h3 class="panel-card-title">
        <span class="icon"><i class="fas fa-route"></i></span>
        ${t("guides.stepsTitle")}
      </h3>
      <div class="guide-steps">${steps}</div>
    </div>

    <h3 class="home-section-title mb-4">${t("guides.topicsTitle")}</h3>
    <div class="columns is-multiline">
      ${cards}
    </div>

    <div class="panel-card mt-5">
      <h3 class="panel-card-title">
        <span class="icon"><i class="fas fa-tags"></i></span>
        ${t("guides.brandsTitle")}
      </h3>
      <p class="panel-card-text mb-3">${t("guides.brandsText")}</p>
      <div class="brand-pills">
        ${brands.map((b) => `<span class="brand-pill">${b}</span>`).join("")}
      </div>
    </div>

    <div class="panel-card panel-card--accent mt-4">
      <h3 class="panel-card-title">
        <span class="icon"><i class="fas fa-lightbulb"></i></span>
        ${t("guides.tipTitle")}
      </h3>
      <p class="panel-card-text mb-0">${t("guides.tipText")}</p>
    </div>

    <div class="panel-card mt-4">
      <h3 class="panel-card-title">
        <span class="icon"><i class="fas fa-circle-question"></i></span>
        ${t("guides.faqTitle")}
      </h3>
      <div class="guide-faq">
        <div class="guide-faq-item">
          <strong>${t("guides.faq.q1")}</strong>
          <p>${t("guides.faq.a1")}</p>
        </div>
        <div class="guide-faq-item">
          <strong>${t("guides.faq.q2")}</strong>
          <p>${t("guides.faq.a2")}</p>
        </div>
        <div class="guide-faq-item">
          <strong>${t("guides.faq.q3")}</strong>
          <p>${t("guides.faq.a3")}</p>
        </div>
      </div>
    </div>
  `;

  app.innerHTML = renderPageLayout({
    title: t("guides.title"),
    content,
  });
}
