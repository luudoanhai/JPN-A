let choice;
do {
    choice = parseInt(prompt("Chọn chức năng:\n1. Cộng hai số\n2. Trừ hai số\n3. Nhân hai số\n4. Chia hai số\n5. Thoát"));

    if (choice >= 1 && choice <= 4) {
        let [a, b] = input();
        let result;

        switch (choice) {
            case 1:
                result = tong(a, b);
                console.log(`Kết quả: ${a} + ${b} = ${result}`);
                break;
            case 2:
                result = hieu(a, b);
                console.log(`Kết quả: ${a} - ${b} = ${result}`);
                break;
            case 3:
                result = nhan(a, b);
                console.log(`Kết quả: ${a} × ${b} = ${result}`);
                break;
            case 4:
                result = chia(a, b);
                console.log(result !== null ? `Kết quả: ${a} ÷ ${b} = ${result}` : "Lỗi: Không thể chia cho 0!");
                break;
        }
    } else if (choice !== 5) {
        console.log("Vui lòng chọn số từ 1 đến 5.");
    }
} while (choice !== 5);

console.log("Thoát chương trình.");

function tong(a, b) {
    return a + b;
}
function hieu(a, b) {
    return a - b;
}
function nhan(a, b) {
    return a * b;
}
function chia(a, b) {
    return b === 0 ? null : a / b;
}
function input() {
    let a, b;
    do {
        a = parseFloat(prompt("Mời bạn nhập số a:"));
        b = parseFloat(prompt("Mời bạn nhập số b:"));

        if (isNaN(a) || isNaN(b)) {
            console.log("Dữ liệu không hợp lệ, vui lòng nhập số!");
        }
    } while (isNaN(a) || isNaN(b));
    
    return [a, b];
}
