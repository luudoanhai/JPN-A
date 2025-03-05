const correctPassword = "123456";

let userPassword = prompt("Nhập mật khẩu:");

if (userPassword === correctPassword) {
    console.log("Mật khẩu đúng.");
} else {
    console.log("Mật khẩu sai.");
}
