
import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderContactPage() {
  const app = document.getElementById("app");

  const content = `
    <div class="box">
      <p>VolleyShop-той холбогдохыг хүсвэл бидэнд хандаарай.</p>

      <div class="content mt-4">
        <ul>
          <li>Дэлгүүр: VolleyShop</li>
          <li>Үйлчилгээ: Волейболын хувцас, хэрэгсэл</li>
          <li>И-мэйл: Холбоо барих хаягаа энд оруулна уу.</li>
        </ul>
      </div>
    </div>
  `;

  app.innerHTML = renderPageLayout({
    title: "Contact",
    content: content,
  });
}
