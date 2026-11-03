
import { renderPageLayout } from "../pageLayout.js";

export function renderNotFoundPage() {
  const app = document.getElementById("app");

  const content = `
    <div class="box has-text-centered">
      <h2 class="title is-4">404 - Page Not Found</h2>
      <p>Уучлаарай, таны хайсан хуудас олдсонгүй.</p>
      <a href="#/overview" class="button is-primary mt-4">
        Нүүр хуудас руу буцах
      </a>
    </div>
  `;

  app.innerHTML = renderPageLayout({
    title: "404 Error",
    content: content,
  });
}
