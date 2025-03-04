let selecte = Number(prompt("Nhập lựa chọn của bạn: 1.USD -> VND   2.VND -> USD "));
let VND;
let USD;
switch(selecte){
    case (1):
        USD = Number(prompt("Nhập số tiền bạn muốn đổi: "));
        VND = USD * 23000;
        console.log(`${USD} VND`);
        break;
    case (2):
        VND = Number(prompt("Nhập số tiền bạn muốn đổi: "));
        USD = VND / 23000;
        console.log(`${USD} USD`);
        break;
    default:
        console.log("Không hợp lệ");
        break;
}