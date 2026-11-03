
import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderSearchPage() {
  const app = document.getElementById("app");

  const content = `
    <div class="box">
      <h2 class="title is-4">Бүтээгдэхүүний төрөл</h2>
      <div class="content">
        <ul>
          <li>Волейболын бөмбөг</li>
          <li>Волейболын өмсгөл</li>
          <li>Волейболын гутал</li>
          <li>Өвдөгний хамгаалалт</li>
        </ul>
      </div>
    </div>
  `;

  app.innerHTML = renderPageLayout({
    title: "Бүтээгдэхүүн",
    content: content,
  });
}
