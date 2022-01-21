import Navigo from "navigo";
import DaoTao from "./pages/daotao";
import Admissions from "./pages/admissions";
import GocSV from "./pages/gocsv";
import HomePage from "./pages/homepage";
import StudenCorner from "./pages/student-corner";
import DetailPage from "./components/detail";
import Dashboard from "./pages/admin/dashboard";
import NewsDashboard from "./components/News";
import NewsDashboardAdd from "./components/News/add";
import Singin from "./components/singin";
import Signup from "./components/sign-up";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
};

router.on({
    "/": () => print(HomePage.render()),
    "/admissions": () => print(Admissions.render()),
    "/tuyendung": () => print(StudenCorner.render()),
    "/daotao": () => print(DaoTao.render()),
    "/gocsv": () => print(GocSV.render()),
    "/singin": () => print(Singin.render()),
    "/singup": () => print(Signup.render()),
    "/gocsv/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(id));
    },
    "/admin/dashboard": () => print(Dashboard.render()),
    "/admin/news": () => print(NewsDashboard.render()),
    "/admin/news/add": () => print(NewsDashboardAdd.render()),
});

router.resolve();

// const getProduct = () => new Promise((resolve, reject) => {
//     setTimeout{() => {
//         try {
//             resolve([1, 2, 3, 4]);
//         } catch (error) {
//             reject("Khong the ket noi")
//         }
//     },3000;
// });
