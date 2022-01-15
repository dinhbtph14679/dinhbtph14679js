const MenuHeader = {
    render() {
        return `
            <ul class="pl-3">
                <li class="inline px-1"><a class="text-white" href="/">Trang chủ</a></li>
                <li class="inline px-1"><a class="text-white" href="/admissions">Tuyển sinh</a></li>
                <li class="inline px-1"><a class="text-white" href="/daotao">Chương trình đào tạo</a></li>
                <li class="inline px-1"><a class="text-white" href="/gocsv">Góc sinh viên</a></li>
                <li class="inline px-1"><a class="text-white" href="/tuyendung">Tuyển dụng</a></li>

            </ul>
        `;
    },
};
export default MenuHeader;
