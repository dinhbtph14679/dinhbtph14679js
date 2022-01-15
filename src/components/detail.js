import data from "../data";

const DetailPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        console.log(result);
        return /* html */`
            <h1>${result.title}</h1>
            <img src="${result.img}" />
            <h1>${result.desc}</h1>
        `;
    },
};
export default DetailPage;
