import NewsList from "../components/news-list";

const HomePage = {
    render() {
        return /* html */ `
            <div class="container mx-auto">
                <div id="news">
                    ${NewsList.render()}
                </div>
            </div>
        `;
    },
};

export default HomePage;
