// import data from "../data";

const ProductList = {
    render() {
        const API = "http://localhost:3002/posts";
        return fetch(API)
            .then((response) => response.json())
            .then((data) =>
                // eslint-disable-next-line implicit-arrow-linebreak
                /* html */`
                            <div class="grid grid-cols-3 gap-8">
                                ${data.map((post) =>/* html */ `
                                    <div class="border p-3">
                                        <a href="/product/${post.id}"><img src="${post.img}" alt="" /></a>
                                        <h3 class="my-3"><a href="/product/${post.id}" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                                        <p>${post.desc}</p>
                                    </div>
                                `).join("")}
                            </div>
                        
                        `);
    },
};
export default ProductList;
