import { t, toggleLanguage } from "../i18n/i18n.js";

export function renderNavbar() {
  return `
    <header class="app-sticky app-shadow">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item has-text-weight-bold is-uppercase app-logo" href="#/overview">
              <span class="icon is-medium app-logo-icon"><i class="fas fa-volleyball fa-lg"></i></span>
              <p>${t("nav.brand")}</p>
            </a>

            <a class="navbar-burger" role="button" aria-expanded="false" data-target="topNavbar">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div class="navbar-menu has-text-weight-semibold has-text-centered" id="topNavbar">
            <div class="navbar-start app-top-navbar-right">
              <a class="navbar-item" href="#/overview"><span class="icon has-text-warning"><i class="fas fa-house"></i></span><span>${t("nav.overview")}</span></a>
              <a class="navbar-item" href="#/search"><span class="icon has-text-primary"><i class="fas fa-bag-shopping"></i></span><span>${t("nav.search")}</span></a>
              <a class="navbar-item" href="#/budget"><span class="icon has-text-link"><i class="fas fa-calculator"></i></span><span>${t("nav.budget")}</span></a>
              <a class="navbar-item" href="#/guides"><span class="icon has-text-info"><i class="fas fa-book-open"></i></span><span>${t("nav.guides")}</span></a>
              <a class="navbar-item" href="#/contact"><span class="icon has-text-danger"><i class="fas fa-address-card"></i></span><span>${t("nav.contact")}</span></a>
            </div>

            <div class="navbar-end">
              <a class="navbar-item" href="#" id="langToggle">
                <span class="icon"><i class="fas fa-earth-asia"></i></span>
                <span>${t("nav.language")}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `;
}

export function initNavbar() {
  const burger = document.querySelector(".navbar-burger");
  const languageToggle = document.getElementById("langToggle");

  if (!burger) return;

  const targetId = burger.dataset.target;
  const menu = document.getElementById(targetId);

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    menu?.classList.toggle("is-active");

    burger.setAttribute("aria-expanded", String(burger.classList.contains("is-active")));
  });

  // Одоо нээлттэй байгаа хуудасны цэсийг тодруулна.
  function updateActiveLink() {
    const current = window.location.hash || "#/overview";
    menu?.querySelectorAll(".navbar-item[href^='#/']").forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === current);
    });
  }

  updateActiveLink();
  window.addEventListener("hashchange", updateActiveLink);

  menu?.querySelectorAll(".navbar-item[href^='#/']").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("is-active");
      menu.classList.remove("is-active");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  languageToggle?.addEventListener("click", (event) => {
    event.preventDefault();
    toggleLanguage();
    window.location.reload();
  });
}

export function mountNavbar(root) {
  if (!root) return;

  root.innerHTML = renderNavbar();
  initNavbar();
}