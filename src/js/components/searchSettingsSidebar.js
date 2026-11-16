export function renderSearchSettingsSidebar() {
  return `
    <div class="box">
      <h3 class="title is-6">Хайх тохиргоо</h3>

      <div class="field">
        <label class="label is-small">Түвшин</label>
        <div class="control">
          <div class="select is-fullwidth">
            <select id="levelFilter">
              <option value="all">Бүх түвшин</option>
              <option value="school">Сургууль</option>
              <option value="club">Клуб</option>
              <option value="professional">Мэргэжлийн</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="checkbox">
          <input type="checkbox" id="inStockOnly" />
          Зөвхөн бэлэн бараа
        </label>
      </div>
    </div>
  `;
}