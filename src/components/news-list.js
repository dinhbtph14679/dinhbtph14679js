import data from "../data";

const NewsList = {
    render() {
        return /* html */ `
                <h1>Tin Tức Học Tập</h1>
                <div class="grid grid-cols-3 gap-8">
                    ${data.map((post) => `
                            <div class="border p-3">
                                <img src="${post.img}" alt="" />
                                <h3><a href="">${post.title}</a></h3>
                                <p>${post.desc}</p>
                            </div>
                        `).join("")}
                </div>
        `;
    },
};
export default NewsList;
