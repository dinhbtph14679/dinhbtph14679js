import Banner from "./banner-home";
import MenuHeader from "./menu-header";
import Logo from "./logo";

const Header = {
    render() {
        return /* html */ `
            <div id="logo" class="text-center">
                ${Logo.render()}
            </div>
            <div class="grid grid-cols-2 pt-3 pb-3 bg-orange-400">
                <div id="menu">
                    ${MenuHeader.render()}
                </div>
                <div>
                    <input class="ml-28 rounded-sm" type="text">
                    <button class="bg-blue-900 text-white px-3 ml-2" type="submit">Tìm kiếm</button>
                </div>
            </div>
            <div id="banner">
                ${Banner.render()}
            </div>
        `;
    },
};
export default Header;
