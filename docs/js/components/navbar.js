import { t, toggleLanguage } from "../i18n/i18n.js";

export function renderNavbar() {
  return `
    <header class="app-sticky app-shadow">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item has-text-weight-bold is-uppercase app-logo" href="#/overview">
              <figure class="image">
                <img src="./img/icon/icon.png" alt="VolleyShop logo" />
              </figure>
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
              <a class="navbar-item" href="#/overview">${t("nav.overview")}</a>
              <a class="navbar-item" href="#/search">${t("nav.search")}</a>
              <a class="navbar-item" href="#/calculation">${t("nav.calculation")}</a>
              <a class="navbar-item" href="#/guides">${t("nav.guides")}</a>
              <a class="navbar-item" href="#/contact">${t("nav.contact")}</a>
            </div>

            <div class="navbar-end">
              <a class="navbar-item" href="#" id="langToggle">
                ${t("nav.language")}
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

    burger.setAttribute(
      "aria-expanded",
      String(burger.classList.contains("is-active"))
    );
  });

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