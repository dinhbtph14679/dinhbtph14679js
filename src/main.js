import Navigo from "navigo";
import HomePage from "./pages/homepage";
import Dashboard from "./pages/admin/dashboard";
import Singin from "./components/singin";
import Signup from "./components/sign-up";
import Product from "./pages/product";
import AboutPape from "./pages/about";
import AdminNews from "./pages/admin/news";
import AdminNewsAdd from "./pages/admin/news/add";
import DetailPage from "./components/detail";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender();
};

router.on({
    "/": () => print(HomePage),
    "/product": () => print(Product),
    "/about": () => print(AboutPape),
    "/news": () => print(AboutPape),
    "/singin": () => print(Singin),
    "/singup": () => print(Signup),
    "/product/:id": ({ data }) => print(DetailPage, data.id),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNews),
    "/admin/news/add": () => print(AdminNewsAdd),
});

router.resolve();
