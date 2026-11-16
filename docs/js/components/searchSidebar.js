import { t } from "../i18n/i18n.js";

export function renderSearchSidebar() {
  return `
    <div class="box">
      <h3 class="title is-6">${t("search.heading")}</h3>
      <div class="field">
        <label class="label is-small">${t("search.placeholder")}</label>
        <div class="control has-icons-left">
          <input id="productSearchInput" class="input" type="search" placeholder="${t("search.placeholder")}" />
          <span class="icon is-left"><i class="fas fa-search"></i></span>
        </div>
      </div>
      <div class="field">
        <label class="label is-small">${t("search.categories")}</label>
        <div class="control">
          <div class="select is-fullwidth">
            <select id="categoryFilter">
              <option value="all">${t("search.allCategories")}</option>
              <option value="ball">${t("categories.ball")}</option>
              <option value="clothing">${t("categories.clothing")}</option>
              <option value="shoes">${t("categories.shoes")}</option>
              <option value="protection">${t("categories.protection")}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label is-small">${t("search.gender")}</label>
        <div class="control">
          <div class="select is-fullwidth">
            <select id="genderFilter">
              <option value="all">${t("search.allGenders")}</option>
              <option value="men">${t("genders.men")}</option>
              <option value="women">${t("genders.women")}</option>
              <option value="kids">${t("genders.kids")}</option>
              <option value="unisex">${t("genders.unisex")}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label is-small">${t("search.size")}</label>
        <div class="control">
          <div class="select is-fullwidth">
            <select id="sizeFilter">
              <option value="all">${t("search.allSizes")}</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="S-XL">S-XL</option>
              <option value="XS-L">XS-L</option>
              <option value="XS-M">XS-M</option>
              <option value="S-L">S-L</option>
              <option value="M-XL">M-XL</option>
              <option value="28-35">28-35</option>
              <option value="35-40">35-40</option>
              <option value="36-40">36-40</option>
              <option value="38-42">38-42</option>
              <option value="39-45">39-45</option>
              <option value="40-46">40-46</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label is-small">${t("search.color")}</label>
        <div class="control">
          <div class="select is-fullwidth">
            <select id="colorFilter">
              <option value="all">${t("search.allColors")}</option>
              <option value="white">${t("colors.white")}</option>
              <option value="black">${t("colors.black")}</option>
              <option value="blue">${t("colors.blue")}</option>
              <option value="red">${t("colors.red")}</option>
              <option value="navy">${t("colors.navy")}</option>
              <option value="yellow">${t("colors.yellow")}</option>
              <option value="green">${t("colors.green")}</option>
              <option value="gray">${t("colors.gray")}</option>
              <option value="multicolor">${t("colors.multicolor")}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <button id="productSearchBtn" class="button is-primary is-fullwidth">
          <span class="icon"><i class="fas fa-search"></i></span>
          <span>${t("search.searchButton")}</span>
        </button>
      </div>
    </div>
  `;
}
