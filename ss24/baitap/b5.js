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

let option = parseInt(prompt("Chọn chức năng:\n1. Tính tổng các phần tử\n2. Tính tổng đường chéo chính\n3. Tính tổng đường chéo phụ\n4. Tính trung bình hàng/cột"));

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
        let sumMainDiagonal = 0;
        for (let i = 0; i < Math.min(rows, cols); i++) {
            sumMainDiagonal += matrix[i][i];
        }
        console.log("Tổng đường chéo chính:", sumMainDiagonal);
        break;
    
    case 3:
        let sumSecondaryDiagonal = 0;
        for (let i = 0; i < Math.min(rows, cols); i++) {
            sumSecondaryDiagonal += matrix[i][cols - 1 - i];
        }
        console.log("Tổng đường chéo phụ:", sumSecondaryDiagonal);
        break;
    
    case 4:
        let choice = prompt("Bạn muốn tính trung bình cộng của hàng (H) hay cột (C)?").toUpperCase();
        if (choice === "H") {
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
        } else if (choice === "C") {
            let colIndex = parseInt(prompt("Nhập số cột cần tính trung bình (bắt đầu từ 1):")) - 1;
            if (colIndex >= 0 && colIndex < cols) {
                let colSum = 0;
                for (let i = 0; i < rows; i++) {
                    colSum += matrix[i][colIndex];
                }
                console.log(`Trung bình cộng của cột ${colIndex + 1}:`, colSum / rows);
            } else {
                console.log("Cột không hợp lệ!");
            }
        }
        break;
    
    default:
        console.log("Lựa chọn không hợp lệ!");
}

console.log("Chương trình kết thúc.");
