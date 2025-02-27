let money =Number(prompt("nhập số tiền cần gửi: "));
let day = Number(prompt("nhập số tháng cần gửi: "));
let newMoney = money * (day * 30) *0.043 / 360;
console.log(newMoney); 