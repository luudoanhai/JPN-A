let numbers = [1, 4, 7, 8, 3];
let sumEven = 0; 
let sumOdd = 0; 

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        sumEven += numbers[i]; 
    } else {
        sumOdd += numbers[i];  
    }
}

console.log("Tổng các số chẵn:", sumEven);
console.log("Tổng các số lẻ:", sumOdd);