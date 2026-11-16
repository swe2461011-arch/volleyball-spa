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
              <option value="shoes">${t("categories.shoes")}</option>
              <option value="clothing">${t("categories.clothing")}</option>
              <option value="protection">${t("categories.protection")}</option>
              <option value="bags">${t("categories.bags")}</option>
              <option value="equipment">${t("categories.equipment")}</option>
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
        <label class="label is-small">${t("search.brand")}</label>
        <div class="control">
          <div class="select is-fullwidth">
            <select id="brandFilter">
              <option value="all">${t("search.allBrands")}</option>
              <option value="Asics">Asics</option>
              <option value="Mizuno">Mizuno</option>
              <option value="Rigorer">Rigorer</option>
              <option value="Mikasa">Mikasa</option>
              <option value="Zamst">Zamst</option>
              <option value="Li Ning">Li Ning</option>
              <option value="361°">361°</option>
              <option value="Atan">Atan</option>
              <option value="Volleyball Store">Volleyball Store</option>
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
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
              <option value="One size">One size</option>
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
