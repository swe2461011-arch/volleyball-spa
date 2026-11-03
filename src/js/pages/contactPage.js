
import { renderPageLayout } from "../pageLayout.js";

export function renderContactPage() {
  const app = document.getElementById("app");

  const content = `
    <div class="box">
      <p>VolleyShop-той холбогдохыг хүсвэл бидэнд хандаарай.</p>

      <div class="content mt-4">
        <ul>
          <li>Дэлгүүр: VolleyShop</li>
          <li>Үйлчилгээ: Волейболын хувцас, хэрэгсэл</li>
          <li>И-мэйл: volleyshop@gmail.com</li>
        </ul>
      </div>
    </div>
  `;

  app.innerHTML = renderPageLayout({
    title: "Contact",
    content: content,
  });
}
