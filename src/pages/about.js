import Footer from "../components/footer";
import Header from "../components/header";
import MainAboutPage from "../components/main-aboupage";

const AboutPape = {
    render() {
        return /* html */ `
            <div>
                <header>
                    ${Header.render()}
                </header>
                <main>
                    <div>
                        ${MainAboutPage.render()}
                    </div>
                </main>
                <footer>
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
};

export default AboutPape;
