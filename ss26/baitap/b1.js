function filterNumbers(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    let result = arr.filter(num => Number.isInteger(num) && num >= 10);

    if (result.length === 0) {
        console.log("Mảng không có phần tử nào");
    } else {
        console.log(result);
    }
}

filterNumbers([1,2,3,4,5,6,9,12]);