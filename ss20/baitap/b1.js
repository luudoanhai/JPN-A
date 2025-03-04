let number = Number(prompt("Nhập số nguyên dương của bạn:"));

if (number > 0 && Number.isInteger(number)) {
    let sum = 0;

    for (let i = 0; i <= number; i++) {
        sum += i;
    }

    console.log(`Tổng các số từ 0 đến ${number} là: ${sum}`);
} else {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
}
