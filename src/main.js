import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/product";

const router = new Navigo("/", { linksSelector: "a" });

const render = (content) => {
    document.querySelector("#app").innerHTML = content.print();
};

router.on({
    "/": () => render(HomePage),
    "/about": () => render(AboutPage),
    "/product": () => render(ProductPage),
});

router.resolve();
