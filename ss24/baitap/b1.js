let arr = [];

function nhapMang() {
    let input = prompt("Nhập các số nguyên, cách nhau bởi dấu cách:");
    arr = input.split(" ").map(Number);
}

function hienThiMang() {
    alert("Mảng hiện tại: " + arr.join(", "));
}

function timMaxMin() {
    if (arr.length === 0) {
        alert("Mảng rỗng. Vui lòng nhập mảng trước!");
        return;
    }
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    alert(`Phần tử lớn nhất: ${max}\nPhần tử nhỏ nhất: ${min}`);
}

function tinhTong() {
    let sum = arr.reduce((acc, val) => acc + val, 0);
    alert("Tổng các phần tử trong mảng: " + sum);
}

function timSoLanXuatHien() {
    let num = Number(prompt("Nhập số cần tìm trong mảng:"));
    let count = arr.filter(x => x === num).length;
    alert(`Số ${num} xuất hiện ${count} lần trong mảng.`);
}

function sapXepTangDan() {
    arr.sort((a, b) => a - b);
    alert("Mảng sau khi sắp xếp tăng dần: " + arr.join(", "));
}

function menu() {
    let choice;
    do {
        choice = prompt(
            "Chọn chức năng:\n" +
            "1. Nhập mảng\n" +
            "2. Hiển thị mảng\n" +
            "3. Tìm phần tử lớn nhất và nhỏ nhất\n" +
            "4. Tính tổng các phần tử\n" +
            "5. Tìm số lần xuất hiện của một phần tử\n" +
            "6. Sắp xếp mảng tăng dần\n" +
            "7. Thoát"
        );
        switch (choice) {
            case "1":
                nhapMang();
                break;
            case "2":
                hienThiMang();
                break;
            case "3":
                timMaxMin();
                break;
            case "4":
                tinhTong();
                break;
            case "5":
                timSoLanXuatHien();
                break;
            case "6":
                sapXepTangDan();
                break;
            case "7":
                alert("Thoát chương trình!");
                break;
            default:
                alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
        }
    } while (choice !== "7");
}

menu();