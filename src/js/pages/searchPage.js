
import { renderPageLayout } from "../pageLayout.js";

export function renderSearchPage() {
  const app = document.getElementById("app");

  const content = `
    <div class="box">
      <p>Волейболын бөмбөг, өмсгөл, гутал болон хамгаалалтын хэрэгслүүдтэй танилцаарай.</p>
    </div>
  `;

  app.innerHTML = renderPageLayout({
    title: "Бүтээгдэхүүн хайх",
    content: content,
  });
}
