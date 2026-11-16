import { mountNavbar } from "./components/navbar.js";
import { mountFooter } from "./components/footer.js";
import { initRouter } from "./router.js";
import { routes } from "./routes.js";

const navbarRoot = document.getElementById("navbar");
const footerRoot = document.getElementById("footer");

mountNavbar(navbarRoot);
mountFooter(footerRoot);

initRouter(routes);
