import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import Admissions from "./pages/admissions";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/product";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#app").innerHTML = content.render();
    document.querySelector("#footer").innerHTML = Footer.render();
};

router.on({
    "/": () => print(HomePage),
    "/admissions": () => print(Admissions),
    "/education": () => print(ProductPage),
    "/studentcorner": () => print(),
});

router.resolve();
