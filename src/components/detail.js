import data from "../data";
import Footer from "./footer";
import Header from "./header";

const DetailPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return /* html */ `
            <div>
                <header>
                    ${Header.render()}
                </header>   
                <main>
                    <div>
                        <h1>${result.title}</h1>
                        <img src="${result.img}" />
                        <h1>${result.desc}</h1>
                    </div>
                </main>
                <footer>
                    ${Footer.render()}
                    
                </footer>
            </div>
        `;
    },
};
export default DetailPage;
