let rows = parseInt(prompt("Nhập số hàng của mảng:"));
let cols = parseInt(prompt("Nhập số cột của mảng:"));

let matrix = [];
for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
        matrix[i][j] = parseInt(prompt(`Nhập phần tử tại hàng ${i + 1}, cột ${j + 1}:`));
    }
}

console.log("Mảng 2 chiều:");
for (let i = 0; i < rows; i++) {
    console.log(matrix[i].join(" "));
}

let option = parseInt(prompt("Chọn chức năng:\n1. Tính tổng các phần tử\n2. Tìm phần tử lớn nhất\n3. Tính trung bình hàng\n4. Đảo ngược các hàng"));

switch (option) {
    case 1:
        let sum = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                sum += matrix[i][j];
            }
        }
        console.log("Tổng các phần tử trong mảng:", sum);
        break;
    
    case 2:
        let maxVal = matrix[0][0];
        let maxRow = 0, maxCol = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (matrix[i][j] > maxVal) {
                    maxVal = matrix[i][j];
                    maxRow = i;
                    maxCol = j;
                }
            }
        }
        console.log(`Phần tử lớn nhất: ${maxVal}, tại vị trí hàng ${maxRow + 1}, cột ${maxCol + 1}`);
        break;
    
    case 3:
        let rowIndex = parseInt(prompt("Nhập số hàng cần tính trung bình (bắt đầu từ 1):")) - 1;
        if (rowIndex >= 0 && rowIndex < rows) {
            let rowSum = 0;
            for (let j = 0; j < cols; j++) {
                rowSum += matrix[rowIndex][j];
            }
            console.log(`Trung bình cộng của hàng ${rowIndex + 1}:`, rowSum / cols);
        } else {
            console.log("Hàng không hợp lệ!");
        }
        break;
    
    case 4:
        for (let i = 0; i < rows; i++) {
            matrix[i].reverse();
        }
        console.log("Mảng sau khi đảo ngược các hàng:");
        for (let i = 0; i < rows; i++) {
            console.log(matrix[i].join(" "));
        }
        break;
    
    default:
        console.log("Lựa chọn không hợp lệ!");
}
