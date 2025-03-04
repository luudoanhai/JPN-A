let numb = prompt("Nhập số nguyên: ");
let check = true;
if (!Number.isInteger(Number(numb)) || numb <= 0) {
    console.log(`Không hợp lệ`);
} else {
    for (let i = 2; i <= Math.sqrt(numb); i++) {
        if (numb % i == 0) {
            check = false;
            break;
        }
    }
    if (check) {
        console.log(`Là số nguyên tố`);
    } else {
        console.log(`Không phải là số nguyên tố`);
    }
}