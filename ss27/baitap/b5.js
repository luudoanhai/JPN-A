function chiaMang(arr, n) {
    if (!Array.isArray(arr) || typeof n !== "number" || n <= 0) {
        return "dữ liệu không hợp lệ";
    }

    let ketQua = [];
    for (let i = 0; i < arr.length; i += n) {
        ketQua.push(arr.slice(i, i + n));
    }

    return ketQua;
}

console.log(chiaMang([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chiaMang([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(chiaMang("abc", 3));
