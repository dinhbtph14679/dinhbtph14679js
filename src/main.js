import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a" });

router.on({
    "/": () => console.log("home page"),
    "/about": () => console.log("about page"),
});

router.notFound(() => console.log("not found"));
router.resolve();
