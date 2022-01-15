import Banner from "../components/banner-home";
import NewsList from "../components/news-list";
import Header from "../components/header";
import Footer from "../components/footer";

const HomePage = {
    render() {
        return /* html */ `
            <div class="max-w-6xl mx-auto">
                <header>
                    ${Header.render()}
                </header>
                <main>
                    <div>
                        ${Banner.render()}
                    </div>
                    <div id="news">
                        ${NewsList.render()}
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