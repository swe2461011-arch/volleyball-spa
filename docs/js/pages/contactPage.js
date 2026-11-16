import { t } from "../i18n/i18n.js";
import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderContactPage() {
  const app = document.getElementById("app");
  const content = `
    <p class="page-lead">${t("contact.intro")}</p>

    <div class="columns is-multiline">
      <div class="column is-5">
        <div class="info-card">
          <div class="info-card-header">
            <span class="info-card-badge"><i class="fas fa-store"></i></span>
            <h2 class="info-card-title">${t("contact.aboutTitle")}</h2>
          </div>
          <p class="info-card-body">${t("contact.aboutText")}</p>
          <ul class="info-list">
            <li>
              <span class="info-list-icon"><i class="fas fa-envelope"></i></span>
              <div>
                <span class="info-list-label">Email</span>
                <a href="mailto:${t("contact.email")}">${t("contact.email")}</a>
              </div>
            </li>
            <li>
              <span class="info-list-icon"><i class="fas fa-location-dot"></i></span>
              <div>
                <span class="info-list-label">${t("contact.addressLabel")}</span>
                <span>${t("contact.address")}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="column is-7">
        <div class="info-card info-card--form">
          <div class="info-card-header">
            <span class="info-card-badge info-card-badge--green"><i class="fas fa-paper-plane"></i></span>
            <h2 class="info-card-title">${t("contact.formTitle")}</h2>
          </div>
          <form id="contactForm" class="contact-form">
            <div class="field">
              <label class="label">${t("contact.name")}</label>
              <div class="control has-icons-left">
                <input class="input is-medium" name="name" required placeholder="${t("contact.namePlaceholder")}" />
                <span class="icon is-left"><i class="fas fa-user"></i></span>
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left">
                <input class="input is-medium" type="email" name="email" required placeholder="email@example.com" />
                <span class="icon is-left"><i class="fas fa-envelope"></i></span>
              </div>
            </div>
            <div class="field">
              <label class="label">${t("contact.message")}</label>
              <div class="control">
                <textarea class="textarea" name="message" rows="5" required placeholder="${t("contact.messagePlaceholder")}"></textarea>
              </div>
            </div>
            <button type="submit" class="button is-primary is-medium is-fullwidth">
              <span class="icon"><i class="fas fa-paper-plane"></i></span>
              <span>${t("contact.send")}</span>
            </button>
          </form>
          <div id="contactThanks" class="thanks-banner" hidden>
            <i class="fas fa-circle-check"></i> ${t("contact.thanks")}
          </div>
        </div>
      </div>
    </div>
  `;

  app.innerHTML = renderPageLayout({ title: t("contact.title"), content });

  document.getElementById("contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const thanks = document.getElementById("contactThanks");
    if (thanks) thanks.hidden = false;
    e.target.reset();
  });
}
