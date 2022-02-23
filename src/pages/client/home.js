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
            <footer class="bg-black h-12 flex items-center justify-center mt-4">
            <span class="text-white font-xs">Nguyễn Nhật Anh</span>
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