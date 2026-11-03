
import { renderOverviewPage } from "./pages/overviewPage.js";
import { renderSearchPage } from "./pages/searchPage.js";
import { renderBudgetPage } from "./pages/BudgetPage.js";
import { renderGuidesPage } from "./pages/guidesPage.js";
import { renderContactPage } from "./pages/contactPage.js";
import { renderNotFoundPage } from "./pages/notFoundPage.js";

export const routes = {
  "#/overview": renderOverviewPage,
  "#/search": renderSearchPage,
  "#/calculation": renderBudgetPage,
  "#/guides": renderGuidesPage,
  "#/contact": renderContactPage,
  "#/404": renderNotFoundPage,
};
