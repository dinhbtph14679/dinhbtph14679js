import MenuHeader from "./menu-header";
import Logo from "./logo";
import ButtonHearder from "./btn-header";

const Header = {
    render() {
        return /* html */ `
                <div id="logo" class="text-center">
                    ${Logo.render()}
                </div>
                <div class="grid grid-cols-2 pt-4 pb-4 bg-orange-400">
                    <div id="menu">
                        ${MenuHeader.render()}
                    </div>
                    <div>
                        ${ButtonHearder.render()}
                    </div>
                </div>
        `;
    },
};
export default Header;
