function KiemTraSoNguyenTo(number) {
    if (number <= 1 || !Number.isInteger(number)) {
        console.log("Day khong phai so nguyen to");
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log("Day khong phai so nguyen to");
            return false;
        }
    }

    console.log("Day la so nguyen to");
    return true;
}

let n = +prompt("Nhap so nguyen duong:");
KiemTraSoNguyenTo(n);
