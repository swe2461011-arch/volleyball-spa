export function renderNotification(message, type = "info") {
  return `<div class="notification is-${type} is-light">${message}</div>`;
}
