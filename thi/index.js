//khai báo list ảnh
let listAnh = [
    '42f3f16f6caf46202517e4bb4ebac5af.jpg',
    '294fb6e4-0a5d-4ff7-9a56-4aace3b60830.png',
    '1920x1080-23689-A.C.-MilanPaolo-Maldini-HD-Wallpaper.png',
];
let i = 0; //khởi tạo giá trị i để lấy ảnh
let idInterval; //dùng cho hàm stop để clearInterval
function hienThi() {
    let slide = document.getElementById('slide');
    slide.src = listAnh[i];
}
function previous() {
    if (i <= 0) {
        i=listAnh.length-1;
    } else {
        i--;
    }
    console.log(i);
    hienThi();
}
function stop() {
    clearInterval(idInterval);
}
function start() {
    idInterval = setInterval('next()',1500);
}
function next() {
    if (i < listAnh.length-1) {
        i++;
    } else {
        i=0;
    }
    hienThi();
}