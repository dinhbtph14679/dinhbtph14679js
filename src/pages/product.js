import Footer from "../components/footer";
import Header from "../components/header";
import ProductMain from "../components/product-main";

const Product = {
    async render() {
        return /* html */ `
            <div>
                <header>
                    ${Header.render()}
                </header>
                <main>
                    <div>
                        ${await ProductMain.render()}
                    </div>
                </main>
                <footer>
                    ${Footer.render()}
                </footer>
            </div>
        `;
    },
};
export default Product;
