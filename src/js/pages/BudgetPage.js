
import { renderPageLayout } from "../pageLayout.js";

export function renderBudgetPage() {
  const app = document.getElementById("app");

  const content = `
    <div class="box">
      <p>Волейболын хэрэгсэл худалдан авах төсвөө тооцоолоорой.</p>

      <div class="content mt-4">
        <ul>
          <li>Волейболын бөмбөг</li>
          <li>Волейболын өмсгөл</li>
          <li>Волейболын гутал</li>
          <li>Өвдөгний хамгаалалт</li>
        </ul>
      </div>

      <p>Бүтээгдэхүүний үнэ болон тоо хэмжээг сонгох тооцоолуурыг дараагийн алхамд нэмж болно.</p>
    </div>
  `;

  app.innerHTML = renderPageLayout({
    title: "Budget",
    content: content,
  });
}
