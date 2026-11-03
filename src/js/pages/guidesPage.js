
import { renderPageLayout } from "../pageLayout.js";

export function renderGuidesPage() {
  const app = document.getElementById("app");

  const content = `
    <div class="box">
      <h2 class="title is-5">Волейболын хэрэгсэл сонгох зөвлөмж</h2>

      <div class="content">
        <ul>
          <li>Өөрт тохирсон хэмжээтэй волейболын гутал сонгох.</li>
          <li>Чанартай волейболын бөмбөг ашиглах.</li>
          <li>Биед эвтэйхэн өмсгөл сонгох.</li>
          <li>Өвдөгний хамгаалалт хэрэглэж гэмтлээс сэргийлэх.</li>
        </ul>
      </div>
    </div>
  `;

  app.innerHTML = renderPageLayout({
    title: "Guides",
    content: content,
  });
}
