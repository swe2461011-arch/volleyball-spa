
import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderOverviewPage() {
  const app = document.getElementById("app");

  const content = `
    <div class="box">
      <h2 class="title is-4">VolleyShop-д тавтай морил!</h2>
      <p>
        Волейболын хувцас, гутал болон спортын хэрэгслүүдийг
        нэг дороос сонгон танилцаарай.
      </p>
      <a href="#/search" class="button is-primary mt-4">
        Бүтээгдэхүүн үзэх
      </a>
    </div>
  `;

  app.innerHTML = renderPageLayout({
    title: "Нүүр хуудас",
    content: content,
  });
}
