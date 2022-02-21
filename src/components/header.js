const Header = {
    render() {
        return /* html */`
        <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center justify-content-between">
    
          <h1 class="logo"><a href="/">ĐìnhShop</a></h1>
          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto" href="/">Trang chủ</a></li>
              <li><a class="nav-link scrollto" href="/about">Giới thiệu</a></li>
              <li><a class="nav-link scrollto" href="/product">Sản phẩm</a></li>
              <li><a class="nav-link scrollto" href="/news">Tin tức</a></li>
              <li><a class="nav-link scrollto" href="#">Liên hệ</a></li>
              <li><a class="nav-link getstarted scrollto" href="/singin">Đăng Nhập</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
    
        </div>
      </header>
        `;
    },
};
export default Header;
