let inputString = prompt("Nhập chuỗi:");

console.log("Chuỗi đã nhập:", inputString);

let length = 0;
for (let i = 0; i < inputString.length; i++) {
    length++;
}
console.log("Độ dài của chuỗi:", length);

let searchChar = prompt("Nhập ký tự cần đếm:");
let count = 0;
for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === searchChar) {
        count++;
    }
}
console.log(`Số lần xuất hiện của '${searchChar}':`, count);

let isPalindrome = true;
for (let i = 0; i < Math.floor(length / 2); i++) {
    if (inputString[i] !== inputString[length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
console.log("Chuỗi có đối xứng không?", isPalindrome ? "Có" : "Không");

let newString = "";
let capitalize = true;
for (let i = 0; i < length; i++) {
    if (capitalize && inputString[i] !== " ") {
        newString += inputString[i].toUpperCase();
        capitalize = false;
    } else {
        newString += inputString[i];
    }
    if (inputString[i] === " ") {
        capitalize = true;
    }
}
console.log("Chuỗi sau khi chuyển đổi:", newString);

console.log("Chương trình kết thúc.");
