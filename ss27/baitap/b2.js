let danhSachSinhVien = [];
let choice;

do {
    choice = prompt(
        "Chọn chức năng:\n" +
        "1. Nhập danh sách sinh viên\n" +
        "2. Hiển thị danh sách sinh viên\n" +
        "3. Tìm sinh viên theo tên\n" +
        "4. Xóa sinh viên khỏi danh sách\n" +
        "5. Thoát"
    );

    if (choice === "1") {
        nhapDanhSachSinhVien();
    } else if (choice === "2") {
        hienThiDanhSach();
    } else if (choice === "3") {
        timSinhVien();
    } else if (choice === "4") {
        xoaSinhVien();
    } else if (choice !== "5") {
        console.log("Vui lòng chọn số từ 1 đến 5.");
    }
} while (choice !== "5");

console.log("Thoát chương trình.");

function nhapDanhSachSinhVien() {
    let soLuong = prompt("Nhập số lượng sinh viên:");
    
    while (!soLuong || isNaN(soLuong) || soLuong.trim() === "") {
        soLuong = prompt("Dữ liệu không hợp lệ. Vui lòng nhập lại số lượng sinh viên:");
    }

    soLuong = Number(soLuong);
    for (let i = 0; i < soLuong; i++) {
        let ten;
        do {
            ten = prompt(`Nhập tên sinh viên thứ ${i + 1}:`).trim();
            if (!ten) {
                console.log("Tên sinh viên không được để trống.");
            }
        } while (!ten);
        danhSachSinhVien.push(ten);
    }
    console.log("Đã nhập danh sách sinh viên.");
}

function hienThiDanhSach() {
    if (danhSachSinhVien.length === 0) {
        console.log("Danh sách sinh viên trống.");
    } else {
        console.log("\n===== DANH SÁCH SINH VIÊN =====");
        danhSachSinhVien.forEach((sv, index) => console.log(`${index + 1}. ${sv}`));
    }
}

function timSinhVien() {
    let tenCanTim = prompt("Nhập tên sinh viên cần tìm:").trim();
    if (!tenCanTim) {
        console.log("Tên không hợp lệ.");
        return;
    }

    let ketQua = danhSachSinhVien.filter(sv => sv.toLowerCase() === tenCanTim.toLowerCase());

    if (ketQua.length > 0) {
        console.log("Sinh viên tìm thấy:", ketQua.join(", "));
    } else {
        console.log("Sinh viên không có trong danh sách.");
    }
}

function xoaSinhVien() {
    let tenCanXoa = prompt("Nhập tên sinh viên cần xóa:").trim();
    if (!tenCanXoa) {
        console.log("Tên không hợp lệ.");
        return;
    }

    let index = danhSachSinhVien.findIndex(sv => sv.toLowerCase() === tenCanXoa.toLowerCase());

    if (index !== -1) {
        danhSachSinhVien.splice(index, 1);
        console.log(`Đã xóa sinh viên: ${tenCanXoa}`);
    } else {
        console.log("Không tìm thấy sinh viên để xóa.");
    }
}