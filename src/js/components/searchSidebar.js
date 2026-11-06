export function renderSearchSidebar() {
  return `
    <div class="box">
      <h3 class="title is-6">Хайх</h3>

      <div class="field">
        <label class="label is-small">Бүтээгдэхүүний нэр</label>
        <div class="control">
          <input
            id="productSearchInput"
            class="input"
            type="search"
            placeholder="Нэр, брэндээр хайх..."
          />
        </div>
      </div>

      <div class="field">
        <label class="label is-small">Ангилал</label>
        <div class="control">
          <div class="select is-fullwidth">
            <select id="categoryFilter">
              <option value="all">Бүх ангилал</option>
              <option value="ball">Бөмбөг</option>
              <option value="clothing">Хувцас</option>
              <option value="shoes">Гутал</option>
              <option value="protection">Хамгаалалт</option>
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

      <div class="field">
        <button id="productSearchBtn" class="button is-primary is-fullwidth">
          Хайх
        </button>
      </div>
    </div>
  `;
}