let firstNumber = Number(prompt("Nhập số thứ nhất: "));
let secondNumber = Number(prompt("Nhập số thứ hai: "));
let threeNumber = Number(prompt("Nhập số thứ ba: "));
let maxNumber;
(firstNumber > secondNumber) ? (firstNumber > threeNumber) ? console.log(`Số lớn nhất trong ba số là ${firstNumber}`) : console.log(`Số lớn nhất trong ba số là ${threeNumber}`) : (secondNumber > threeNumber) ? console.log(`Số lớn nhất trong ba số là ${secondNumber}`) : console.log(`Số lớn nhất trong ba số là ${threeNumber}`);