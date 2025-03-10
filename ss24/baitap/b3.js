let array = [];
let sum = 0;
let ave = 0;

let n = prompt("Nhập số lượng phần tử của mảng:");
n = parseInt(n);
for (let i = 0; i < n; i++) {
    let num = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
    array.push(num);
}

for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        sum += array[i];
    }
}
ave = sum / array.length;
console.log("Tổng các số dương trong mảng:", sum);
console.log("Trung bình cộng:", ave);

let arrayRev = [...array].reverse();
console.log("Mảng đảo ngược:", arrayRev);

let flag = true;
for (let i = 0; i < array.length / 2; i++) {
    if (array[i] !== array[array.length - 1 - i]) {
        flag = false;
        break;
    }
}

if (flag) {
    console.log("Mảng đối xứng.");
} else {
    console.log("Mảng không đối xứng.");
}
