import { t } from "../i18n/i18n.js";
import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderContactPage() {
  const app = document.getElementById("app");
  const content = `
    <div class="box clean-box">
      <h2 class="title is-5">${t("contact.aboutTitle")}</h2>
      <p class="mb-4 has-text-grey">${t("contact.aboutText")}</p>
      <div class="content">
        <ul>
          <li><strong>И-мэйл:</strong> ${t("contact.email")}</li>
          <li><strong>Хаяг:</strong> ${t("contact.address")}</li>
        </ul>
      </div>
    </div>
  `;
  app.innerHTML = renderPageLayout({ title: t("contact.title"), content });
}
