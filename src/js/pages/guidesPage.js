import { t } from "../i18n/i18n.js";
import { renderPageLayout } from "../layouts/pageLayout.js";

export function renderGuidesPage() {
  const app = document.getElementById("app");
  const content = `
    <div class="box clean-box">
      <h2 class="title is-5">Пүүз & хэрэгсэл сонгох</h2>
      <div class="content">
        <ul>
          <li><strong>Пүүз:</strong> Asics Sky Elite, Mizuno Wave Lightning / Momentum — хөнгөн, барицтай ултай загваруудыг сонгоорой.</li>
          <li><strong>Хэмжээ:</strong> Японы хэмжээ (см)-тэй тулгаж сонгоно.</li>
          <li><strong>Бөмбөг:</strong> Mikasa зэрэг стандартын бөмбөг.</li>
          <li><strong>Хамгаалалт:</strong> Өвдөг, тохой, шагайны хамгаалалт бэлтгэлд чухал.</li>
        </ul>
      </div>
    </div>
    <div class="box clean-box">
      <h2 class="title is-5">Брэндүүд</h2>
      <div class="tags are-medium">
        <span class="tag is-dark">Asics</span>
        <span class="tag is-dark">Mizuno</span>
        <span class="tag is-light">Rigorer</span>
        <span class="tag is-light">Mikasa</span>
        <span class="tag is-light">Zamst</span>
      </div>
    </div>
  `;
  app.innerHTML = renderPageLayout({ title: t("guides.title"), content });
}
