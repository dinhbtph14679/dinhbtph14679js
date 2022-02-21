import Banner from "../components/banner-home";
import Header from "../components/header";
import Footer from "../components/footer";
import ManiHomePage from "../components/main-homepage";

const HomePage = {
    async render() {
        return /* html */ `
            <div>
                <header>
                    ${Header.render()}
                </header>
                <main>
                    <div>
                        ${Banner.render()}
                    </div>
                    <div>
                        ${ManiHomePage.render()}
                    </div>
                </main>
                <footer>
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
};
export default HomePage;
