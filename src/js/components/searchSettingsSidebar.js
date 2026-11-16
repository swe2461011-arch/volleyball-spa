import { t } from "../i18n/i18n.js";

export function renderSearchSettingsSidebar() {
  return `
    <div class="box">
      <h3 class="title is-6">${t("search.settings")}</h3>
      <div class="field">
        <label class="label is-small">${t("search.level")}</label>
        <div class="control">
          <div class="select is-fullwidth">
            <select id="levelFilter">
              <option value="all">${t("search.allLevels")}</option>
              <option value="school">${t("levels.school")}</option>
              <option value="club">${t("levels.club")}</option>
              <option value="professional">${t("levels.professional")}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="checkbox">
          <input type="checkbox" id="inStockOnly" />
          ${t("search.inStockOnly")}
        </label>
      </div>
    </div>
  `;
}
