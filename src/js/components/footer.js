import { t } from "../i18n/i18n.js";

export function renderFooter() {
  return `
    <footer class="app-footer">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <p class="has-text-weight-bold is-size-5 mb-1">
              <span class="icon"><i class="fas fa-volleyball"></i></span>
              ${t("nav.brand")}
            </p>
            <p class="is-size-7 has-text-grey">${t("footer.tagline")}</p>
          </div>
          <div class="column has-text-centered">
            <a href="#/overview" class="footer-link">${t("nav.overview")}</a>
            <a href="#/search" class="footer-link">${t("nav.search")}</a>
            <a href="#/guides" class="footer-link">${t("nav.guides")}</a>
            <a href="#/contact" class="footer-link">${t("nav.contact")}</a>
          </div>
          <div class="column has-text-right-tablet">
            <p class="is-size-7 has-text-grey">${t("footer.rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function mountFooter(root) {
  if (!root) return;
  root.innerHTML = renderFooter();
}
