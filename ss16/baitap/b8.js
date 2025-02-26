let firstNumber = Number(prompt("Nhập số thứ nhất: "));
let secondNumber = Number(prompt("Nhập số thứ hai: "));
let threeNumber = Number(prompt("Nhập số thứ ba: "));
let maxNumber = Math.max(firstNumber, secondNumber, threeNumber);
document.write(`Số lớn nhất trong ba số la: ` + maxNumber + `<br>`);