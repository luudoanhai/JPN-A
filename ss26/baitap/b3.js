let number = +prompt("Nhập số lượng chuỗi muốn thêm vào mảng:");
let arr = [];

function isValidEmail(email) {
    return typeof email === "string" && email.includes("@") && !email.includes(" ");
}

function fill() {
    if (Number.isInteger(number) && number > 0) {
        for (let i = 0; i < number; i++) {
            let input = prompt("Mời bạn nhập email:");
            arr.push(input);
        }
        
        let result = arr.filter(isValidEmail);
        console.log("Các email hợp lệ:", result);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}

fill();
