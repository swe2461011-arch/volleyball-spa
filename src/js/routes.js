function renderPage(title, text) {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="box">
      <h2 class="title is-4">${title}</h2>
      <p>${text}</p>
    </div>
  `;
}

export const routes = {
  "#/overview": () =>
    renderPage("Overview", "Welcome to the Volleyball Gear Guide: clothing and equipment for volleyball."),
  "#/search": () =>
    renderPage("Search", "Search volleyball clothing and equipment here."),
  "#/calculation": () =>
    renderPage("Budget Calculator", "Calculate the clothing and equipment budget of a team."),
  "#/books": () =>
    renderPage("Guides", "Guides on choosing and caring for your gear."),
  "#/contact": () => renderPage("Contact", "Contact information."),
  "#/404": () => renderPage("404", "Page not found."),
};