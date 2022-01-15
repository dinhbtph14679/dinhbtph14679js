import NewsList from "../components/news-list";
import Header from "../components/header";
import Footer from "../components/footer";

const GocSV = {
    render() {
        return `
            <div class="max-w-6xl mx-auto">
                <header>
                    ${Header.render()}
                </header>
                <main>
                    ${NewsList.render()}
                </main>
                <footer>
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
};
export default GocSV;
