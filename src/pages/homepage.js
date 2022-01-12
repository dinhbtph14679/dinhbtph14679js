import NewsList from "../components/news-list";

const HomePage = {
    print() {
        return /* html */ `
            <h1>Home Page</h1>
            <div id="news">
            ${NewsList.print()}
            </div>
        `;
    },
};

export default HomePage;
