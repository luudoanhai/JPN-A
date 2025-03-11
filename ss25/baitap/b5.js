function countNumber(arr) {
    if (!Array.isArray(arr)) {
        console.log("Mang khong phu hop");
        return;
    }

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && Number.isInteger(arr[i])) {
            count++;
        }
    }

    if (count == 0) {
        console.log("Khong co so nguyen duong trong mang");
    } else {
        console.log("So luong so nguyen duong trong mang:", count);
    }
}

let arr = [1, -2, 3, 4.5, 6, -8, 10];
countNumber(arr);
