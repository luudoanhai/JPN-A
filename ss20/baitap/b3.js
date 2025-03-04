let number = +prompt("Nhập số cần kiểm tra:");
let textNumber = number.toString();

if (Number.isInteger(number)) {
    let isPalindrome = true;

    for (let i = 0; i < textNumber.length / 2; i++) {
        if (textNumber[i] !== textNumber[textNumber.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        console.log("Đây là số đối xứng.");
    } else {
        console.log("Đây không phải số đối xứng.");
    }
} else {
    console.log("Số nhập không hợp lệ.");
}
