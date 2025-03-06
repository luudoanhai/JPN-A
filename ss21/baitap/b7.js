let principal = Number(prompt("Nhập số tiền ban đầu:"));
let interestRate = Number(prompt("Nhập lãi suất (% mỗi tháng):")) / 100;
let months = Number(prompt("Nhập số tháng gửi:"));

let totalAmount = principal * Math.pow(1 + interestRate, months);
let interestEarned = totalAmount - principal;

document.write("Tiền lãi: " + interestEarned.toFixed(3) + "<br>");
document.write("Tiền nhận được: " + totalAmount.toFixed(3));