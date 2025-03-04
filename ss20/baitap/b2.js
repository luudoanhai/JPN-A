let a = Number(prompt("Nhập một số nguyên dương:"));
let b = "";

if (Number.isInteger(a) && a > 0) {
    for (let i = 1; i <= a; i++) {
        if (i % 5 == 0) {
            b += i + ", ";
        }
    }

    b = b.slice(0, -2);

    console.log(`Các số chia hết cho 5 từ 1 đến ${a} là: ${b}`);
} else {
    console.log("Dữ liệu bạn nhập vào không hợp lệ");
}
