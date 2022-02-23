import News from "../../components/news";
import Header from "../../components/header";
import Products from "../../components/products";

const HomePage = {
    async render() {
        
        return /* html */ `
        <div class="container w-full mx-auto max-h-full">  
            <div id="header" >
                ${Header.render()}
            </div>  
            <div class="banner my-2">
                <a href="">
                    <img class="w-full" src="https://img3.thuthuatphanmem.vn/uploads/2019/10/14/anh-lookbook-thoi-trang_113854100.jpg"/> 
                </a>
            </div>
            <div class="content px-24">
                ${await News.render()}
                ${await Products.render()}
            </div>
            <footer class="bg-slate-300 h-12 flex items-center justify-center mt-4">
                <h3 class="text-stone-700">Design by <span class="text-red-500 font-xs">Bùi Tiến Đình</span></h3>
            </footer>
        </div>
        `
    },
    afterRender(){
        Header.afterRender();
        // eslint-disable-next-line no-unused-vars
        News.afterRender();
       
        Products.afterRender(); 
      
    }
};
export default HomePage;