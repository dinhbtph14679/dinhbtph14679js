import FeatureProduct from "../components/feature-product";

const ProductPage = {
    print() {
        return /* html */ `
            <h1>Product Page</h1>
            ${FeatureProduct.print()}
        `;
    },
};
export default ProductPage;
