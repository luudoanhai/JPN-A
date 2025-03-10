let arr = [];
let sum = 0;
let n = prompt("Nhập số lượng phần tử của mảng:");
n = parseInt(n);

for (let i = 0; i < n; i++) {
    let num = prompt(`Nhập phần tử thứ ${i + 1}:`);
    arr.push(parseInt(num));
}

let arrayEven = [];
let arrayOdd = [];

for (let i = 0; i < arr.length; i++) {
    (arr[i] % 2 === 0) ? arrayEven.push(arr[i]) : arrayOdd.push(arr[i]);
}

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

let ave = sum / arr.length;

let index = prompt("Nhập vị trí muốn xóa (từ 0 đến " + (arr.length - 1) + "):");
index = parseInt(index);
if (index >= 0 && index < arr.length) {
    arr.splice(index, 1);
}

console.log("Mảng sau khi xóa phần tử tại vị trí " + index + ":", arr);
console.log("Số chẵn:", arrayEven);
console.log("Số lẻ:", arrayOdd);
console.log("Tổng các phần tử:", sum);
console.log("Trung bình cộng:", ave);
