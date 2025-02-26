let mathPoint = Number(prompt("Nhập điểm Toán"));
let physicPoint = Number(prompt("Nhập điểm Vật Lý"));
let chemistryPoint = Number(prompt("Nhập điểm Hóa Học"));
let averagePoint = (mathPoint + physicPoint + chemistryPoint) / 3;
let result = Math.round(averagePoint.toFixed(2));
console.log("Điểm trung bình là:", result);