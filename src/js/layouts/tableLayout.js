/**
 * Хүснэгтийн ерөнхий layout.
 * headers: ["Нэр", "Брэнд", "Үнэ", ...]
 * rows: HTML string (tr-үүдийн нийлбэр)
 */
export function renderTableLayout({ headers = [], rows = "", emptyMessage = "Өгөгдөл олдсонгүй." } = {}) {
  if (!rows) {
    return `
      <div class="notification is-warning is-light">
        ${emptyMessage}
      </div>
    `;
  }

  const headerHtml = headers.map((h) => `<th>${h}</th>`).join("");

  return `
    <div class="table-container">
      <table class="table is-fullwidth is-striped is-hoverable">
        <thead>
          <tr>
            ${headerHtml}
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  `;
}